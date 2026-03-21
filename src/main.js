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

// ✅ FIX BUG 2: Walk flagDelta, flagDelta2, flagDelta3... until none found
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

// ✅ FIX BUG 3: Apply scene-level flagWrites when entering a scene
function applySceneFlagWrites(scene) {
  if (Array.isArray(scene.flagWrites)) {
    scene.flagWrites.forEach(({ flagKey, flagValue }) => {
      setFlag(flagKey, flagValue);
    });
  }
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

  // ✅ FIX BUG 3: Apply scene-level flags on entry, BEFORE saving
  applySceneFlagWrites(scene);
  saveState();

  document.getElementById('chapter-title').textContent =
    (chapter.title || "Chapter " + (state.chapterIdx + 1)) +
    (chapter.subtitle ? " — " + chapter.subtitle : '');

  document.getElementById('scene').innerHTML = `<p>${scene.text}</p>`;

  const choicesDiv = document.getElementById('choices');
  choicesDiv.innerHTML = '';

// Battle gate handler
if (scene.isBattleGate) {
  const winBtn = document.createElement('button');
  winBtn.textContent = "⚔️ Fight";
  winBtn.onclick = () => {
    state.sceneRef = scene.battleWinSceneRef;
    render();
    renderFlags();
  };
  const loseBtn = document.createElement('button');
  loseBtn.textContent = "🏳️ Retreat";
  loseBtn.onclick = () => {
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
        // ✅ FIX BUG 2: Apply flagDelta + flagDelta2 + any further deltas
        applyChoiceFlags(choice);

        if (!choice.nextScene) {
          if (state.chapterIdx < chapters.length - 1) {
            state.chapterIdx += 1;
            state.sceneRef = chapters[state.chapterIdx].scenes[0].sceneRef;
          } else {
            document.getElementById('scene').innerHTML = '<p>End of Story. Thanks for playing!</p>';
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
      // Scene has an explicit next — follow it
      state.sceneRef = scene.nextScene;
      render();
      renderFlags();
    } else if (state.chapterIdx < chapters.length - 1) {
      // True end of chapter — advance to next
      state.chapterIdx += 1;
      state.sceneRef = chapters[state.chapterIdx].scenes[0].sceneRef;
      render();
      renderFlags();
    } else {
      document.getElementById('scene').innerHTML = '<p>End of Story. Thanks for playing!</p>';
      choicesDiv.innerHTML = '';
    }
  };
  choicesDiv.appendChild(btn);
}

function renderFlags() {
  // Optional debug panel — add <div id="flags"></div> to index.html to enable
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