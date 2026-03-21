import { chapters } from './chaptersIndex.js';
import { buildDefaultFlags, assertFlagKey, getAllFlags } from './flags.js';

const SAVE_KEY = "story-mvp:progress:v2";

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

// PHASE 1.1 + 1.2: Parse {if flagKey operator value} conditional lines in scene text
function resolveText(text, flags) {
  return text
    .split("<br>")
    .filter(line => {
      const match = line.match(/^\{if\s+(\w+)\s*(>=|<=|==|>|<)\s*(\d+)\}/);
      if (!match) return true; // not a conditional line — always keep
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
    .map(line => line.replace(/^\{if[^}]+\}\s*/, "")) // strip {if ...} from kept lines
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

function render() {
  const chapter = getCurrentChapter();
  const scene = getCurrentScene();
  if (!chapter || !scene) {
    document.getElementById('scene').innerHTML = "<b>Scene not found.</b>";
    document.getElementById('choices').innerHTML = "";
    document.getElementById('chapter-title').textContent = '';
    return;
  }

  // Apply scene-level flags on entry, BEFORE saving
  applySceneFlagWrites(scene);
  saveState();

  document.getElementById('chapter-title').textContent =
    (chapter.title || "Chapter " + (state.chapterIdx + 1)) +
    (chapter.subtitle ? " — " + chapter.subtitle : '');

  // Use resolveText so {if ...} inline conditionals react to flags
  document.getElementById('scene').innerHTML =
    `<p>${resolveText(scene.text, state.flags)}</p>`;

  const choicesDiv = document.getElementById('choices');
  choicesDiv.innerHTML = '';

  // Battle gate handler (MVP)
  if (scene.isBattleGate) {
    const winBtn = document.createElement('button');
    winBtn.textContent = "⚔️ Fight";
    winBtn.onclick = () => {
      setFlag('battle_won', 1);           // PHASE 1.3
      state.sceneRef = scene.battleWinSceneRef;
      render();
      renderFlags();
    };
    const loseBtn = document.createElement('button');
    loseBtn.textContent = "🏳️ Retreat";
    loseBtn.onclick = () => {
      setFlag('battle_lost', 1);          // PHASE 1.3
      state.sceneRef = scene.battleLoseSceneRef;
      render();
      renderFlags();
    };
    choicesDiv.appendChild(winBtn);
    choicesDiv.appendChild(loseBtn);
    return;
  }

  if (Array.isArray(scene.choices) && scene.choices.length > 0) {
    scene.choices.forEach((choice) => {
      const btn = document.createElement('button');
      btn.textContent = choice.text;
      btn.onclick = () => {
        // Apply flagDelta + flagDelta2 + any further deltas
        applyChoiceFlags(choice);

        if (!choice.nextScene) {
          if (state.chapterIdx < chapters.length - 1) {
            state.chapterIdx += 1;
            state.sceneRef = chapters[state.chapterIdx].scenes[0].sceneRef;
          } else {
            document.getElementById('scene').innerHTML =
              '<p>End of Story. Thanks for playing!</p>';
            choicesDiv.innerHTML = '';
            renderFlags();
            return;
          }
        } else {
          state.sceneRef = choice.nextScene;
        }
        render();
        renderFlags();
      };
      choicesDiv.appendChild(btn);
    });
  } else {
    // No choices: go to nextScene if present, otherwise advance chapter
    const btn = document.createElement('button');
    btn.textContent = "Continue";
    btn.onclick = () => {
      if (scene.nextScene) {
        state.sceneRef = scene.nextScene;
        render();
        renderFlags();
      } else if (state.chapterIdx < chapters.length - 1) {
        state.chapterIdx += 1;
        state.sceneRef = chapters[state.chapterIdx].scenes[0].sceneRef;
        render();
        renderFlags();
      } else {
        document.getElementById('scene').innerHTML =
          '<p>End of Story. Thanks for playing!</p>';
        choicesDiv.innerHTML = '';
      }
    };
    choicesDiv.appendChild(btn);
  }
  renderFlags();
}

function renderFlags() {
  const flagDiv = document.getElementById('flags');
  if (!flagDiv) return;
  const flags = getAllFlags();
  flagDiv.innerHTML =
    "<h4>Flag States</h4>" +
    flags
      .map(f => `${f.label || f.flagKey}: ${state.flags[f.flagKey] ?? 0}`)
      .join('<br>');
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