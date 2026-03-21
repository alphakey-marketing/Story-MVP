import { chapters } from './chaptersIndex.js';
import { buildDefaultFlags, assertFlagKey, getAllFlags } from './flags.js';

const SAVE_KEY = "story-mvp:progress:v2";

// 2.3: Map backgroundKey values to body CSS classes
const BG_MAP = {
  // Owari / field
  owari_plains_dusk:              'bg-field',
  owari_province_dawn:            'bg-dawn',
  owari_armory_night:             'bg-night',
  okehazama_battlefield:          'bg-battle',
  okehazama_aftermath:            'bg-dawn',
  // Kyoto / court
  kyoto_road_arrival:             'bg-court',
  kyoto_imperial_gate:            'bg-court',
  kyoto_streets_market:           'bg-court',
  shogunate_audience_hall:        'bg-court',
  // Temple / religion
  honnoji_temple_night_arrival:   'bg-temple',
  honnoji_temple_courtyard_torches:'bg-battle',
  honnoji_inner_hall_smoke:       'bg-battle',
  honnoji_inner_hall_desk:        'bg-battle',
  honnoji_burning_inner_hall:     'bg-battle',
  honnoji_burning_final:          'bg-battle',
  honnoji_dawn_aftermath:         'bg-dawn',
  // Mino
  mino_border_autumn_fog:         'bg-field',
  mino_dosan_manor:               'bg-court',
  mino_garden_autumn:             'bg-field',
  mino_garden_autumn_late:        'bg-field',
  mino_garden_sunset:             'bg-field',
  mino_road_evening:              'bg-field',
  mino_border_pass_tense:         'bg-field',
  mino_border_pass_skirmish:      'bg-battle',
  mino_border_pass_clear:         'bg-dawn',
  mino_border_retreat:            'bg-field',
  mino_border_negotiation:        'bg-field',
  mino_yoshitatsu_army_road:      'bg-battle',
  mountain_pass_hidden:           'bg-night',
  gifu_castle_tower_night:        'bg-night',
  // Maps / scrolls
  japan_map_painted_scroll:       'bg-map',
  // Water / grief
  nagashino_river_low:            'bg-water',
  // Default fallback
  default:                        'bg-default',
};

const BG_CLASSES = [...new Set(Object.values(BG_MAP))];

let state = {
  chapterIdx: 0,
  sceneRef: chapters[0].scenes[0]?.sceneRef,
  flags: buildDefaultFlags(),
};

function saveState() {
  window.localStorage.setItem(SAVE_KEY, JSON.stringify(state));
}

function loadState() {
  const s = window.localStorage.getItem(SAVE_KEY);
  if (s) {
    try {
      const parsed = JSON.parse(s);
      if (
        typeof parsed.chapterIdx === "number" &&
        typeof parsed.sceneRef === "string" &&
        typeof parsed.flags === "object"
      ) {
        state = parsed;
      }
    } catch {
      /* Ignore broken saves */
    }
  }
}

function setFlag(key, value) {
  try {
    assertFlagKey(key);
    state.flags[key] = (typeof value === "number"
      ? (state.flags[key] || 0) + value
      : value
    );
  } catch {
    // Ignore if key is not in registry
  }
}

// FIX BUG 2: Walk flagDelta, flagDelta2, flagDelta3... until none found
function applyChoiceFlags(choice) {
  let i = 1;
  let key = "flagDelta";
  while (choice[key]) {
    const { flagKey, delta } = choice[key];
    setFlag(flagKey, delta);
    i++;
    key = "flagDelta" + i;
  }
}

// FIX BUG 3: Apply scene-level flagWrites when entering a scene
function applySceneFlagWrites(scene) {
  if (Array.isArray(scene.flagWrites)) {
    scene.flagWrites.forEach(({ flagKey, flagValue }) => {
      setFlag(flagKey, flagValue);
    });
  }
}

// PHASE 1.1 + 1.2: Parse {if flagKey operator value} conditional lines
function resolveText(text, flags) {
  return text
    .split("<br>")
    .filter(line => {
      const match = line.match(/^\{if\s+(\w+)\s*(>=|<=|==|>|<)\s*(\d+)\}/);
      if (!match) return true;
      const [, flagKey, operator, rawValue] = match;
      const current = flags[flagKey] ?? 0;
      const value = Number(rawValue);
      if (operator === ">=") return current >= value;
      if (operator === "<=") return current <= value;
      if (operator === "==") return current === value;
      if (operator === ">")  return current > value;
      if (operator === "<")  return current < value;
      return false;
    })
    .map(line => line.replace(/^\{if[^}]+\}\s*/, ""))
    .join("<br>");
}

function getCurrentChapter() {
  return chapters[state.chapterIdx];
}

function resolveSceneRef(baseRef) {
  const chapter = getCurrentChapter();
  const variants = chapter.scenes.filter(s =>
    s.sceneRef.startsWith(baseRef + "_") && s.flagCondition
  );
  for (const variant of variants) {
    const { flagKey, operator, value } = variant.flagCondition;
    const current = state.flags[flagKey] ?? 0;
    if (
      (operator === "gte" && current >= value) ||
      (operator === "lte" && current <= value) ||
      (operator === "eq"  && current === value)
    ) {
      return variant.sceneRef;
    }
  }
  return baseRef;
}

function getCurrentScene() {
  const chapter = getCurrentChapter();
  const resolved = resolveSceneRef(state.sceneRef);
  return chapter.scenes.find(s => s.sceneRef === resolved);
}

// Google Translate-safe DOM write
function setHTML(id, html) {
  const el = document.getElementById(id);
  if (!el) return;
  const fresh = el.cloneNode(false);
  fresh.innerHTML = html;
  el.parentNode.replaceChild(fresh, el);
}

// 2.3: Apply background colour from backgroundKey
function applyBackground(backgroundKey) {
  const cls = BG_MAP[backgroundKey] || BG_MAP['default'];
  BG_CLASSES.forEach(c => document.body.classList.remove(c));
  document.body.classList.add(cls);
}

// 2.2: Show chapter title card, then call done() when dismissed
function showChapterCard(chapter, done) {
  const card = document.getElementById('chapter-card');
  document.getElementById('chapter-card-number').textContent =
    'Chapter ' + chapter.number;
  document.getElementById('chapter-card-title').textContent =
    chapter.title || '';
  document.getElementById('chapter-card-subtitle').textContent =
    chapter.subtitle || '';

  card.classList.remove('hidden', 'fading-out');

  // Auto-dismiss after 2.5s with fade
  setTimeout(() => {
    card.classList.add('fading-out');
    setTimeout(() => {
      card.classList.add('hidden');
      card.classList.remove('fading-out');
      done();
    }, 600);
  }, 2500);
}

// 2.5: Update flag bar widths (max value per flag capped at 8 for display)
const FLAG_MAX = 8;
const FLAG_BAR_KEYS = [
  'ruthlessness', 'political_power', 'mitsuhide_loyalty',
  'bond_strength', 'weapon_legacy', 'road_command'
];

function renderFlagBar() {
  FLAG_BAR_KEYS.forEach(key => {
    const el = document.getElementById('flag-' + key);
    if (!el) return;
    const val = Math.max(0, state.flags[key] ?? 0);
    el.style.width = Math.min(100, (val / FLAG_MAX) * 100) + '%';
  });
}

// 2.1: Fade out story content, swap, fade in
function renderWithFade(fn) {
  const content = document.getElementById('story-content');
  content.classList.add('fading');
  setTimeout(() => {
    fn();
    content.classList.remove('fading');
  }, 200);
}

function render() {
  const chapter = getCurrentChapter();
  const scene = getCurrentScene();
  if (!chapter || !scene) {
    setHTML('scene-text', "<b>Scene not found.</b>");
    setHTML('choices', "");
    setHTML('chapter-title-text', '');
    return;
  }

  applySceneFlagWrites(scene);
  saveState();

  // 2.3: Apply background
  if (scene.backgroundKey) applyBackground(scene.backgroundKey);

  setHTML('chapter-title-text',
    (chapter.title || "Chapter " + (state.chapterIdx + 1)) +
    (chapter.subtitle ? " — " + chapter.subtitle : ''));

  setHTML('scene-text',
    `<p>${resolveText(scene.text, state.flags)}</p>`);

  setHTML('choices', '');
  const choicesDiv = document.getElementById('choices');

  // Battle gate handler
  if (scene.isBattleGate) {
    const winBtn = document.createElement('button');
    winBtn.textContent = "⚔️ Fight";
    winBtn.onclick = () => {
      setFlag('battle_won', 1);
      state.sceneRef = scene.battleWinSceneRef;
      renderWithFade(render);
      renderFlagBar();
    };
    const loseBtn = document.createElement('button');
    loseBtn.textContent = "🏳️ Retreat";
    loseBtn.onclick = () => {
      setFlag('battle_lost', 1);
      state.sceneRef = scene.battleLoseSceneRef;
      renderWithFade(render);
      renderFlagBar();
    };
    choicesDiv.appendChild(winBtn);
    choicesDiv.appendChild(loseBtn);
    renderFlagBar();
    return;
  }

  if (Array.isArray(scene.choices) && scene.choices.length > 0) {
    scene.choices.forEach((choice) => {
      const btn = document.createElement('button');
      btn.textContent = choice.text;
      btn.onclick = () => {
        applyChoiceFlags(choice);

        if (!choice.nextScene) {
          if (state.chapterIdx < chapters.length - 1) {
            const nextIdx = state.chapterIdx + 1;
            // 2.2: Show chapter card before advancing
            showChapterCard(chapters[nextIdx], () => {
              state.chapterIdx = nextIdx;
              state.sceneRef = chapters[nextIdx].scenes[0].sceneRef;
              renderWithFade(render);
              renderFlagBar();
            });
          } else {
            setHTML('scene-text', '<p>End of Story. Thanks for playing!</p>');
            setHTML('choices', '');
            renderFlagBar();
          }
        } else {
          state.sceneRef = choice.nextScene;
          renderWithFade(render);
          renderFlagBar();
        }
      };
      choicesDiv.appendChild(btn);
    });
  } else {
    const btn = document.createElement('button');
    btn.textContent = "Continue";
    btn.onclick = () => {
      if (scene.nextScene) {
        state.sceneRef = scene.nextScene;
        renderWithFade(render);
        renderFlagBar();
      } else if (state.chapterIdx < chapters.length - 1) {
        const nextIdx = state.chapterIdx + 1;
        // 2.2: Show chapter card before advancing
        showChapterCard(chapters[nextIdx], () => {
          state.chapterIdx = nextIdx;
          state.sceneRef = chapters[nextIdx].scenes[0].sceneRef;
          renderWithFade(render);
          renderFlagBar();
        });
      } else {
        setHTML('scene-text', '<p>End of Story. Thanks for playing!</p>');
        setHTML('choices', '');
      }
    };
    choicesDiv.appendChild(btn);
  }
  renderFlagBar();
}

// --- INIT ---
loadState();
render();

// Expose reset for debug use in browser console
window.resetStoryState = function() {
  state = {
    chapterIdx: 0,
    sceneRef: chapters[0].scenes[0]?.sceneRef,
    flags: buildDefaultFlags(),
  };
  saveState();
  render();
};