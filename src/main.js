import { chapters } from './chaptersIndex.js';
import { buildDefaultFlags, assertFlagKey, getAllFlags } from './flags.js';

const SAVE_KEY = "story-mvp:progress:v2"; // New save version for new structure!

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

function getCurrentChapter() {
  return chapters[state.chapterIdx];
}

function getCurrentScene() {
  const chapter = getCurrentChapter();
  return chapter.scenes.find(s => s.sceneRef === state.sceneRef);
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
  saveState();

  document.getElementById('chapter-title').textContent =
    (chapter.title || "Chapter " + (state.chapterIdx + 1)) +
    (chapter.subtitle ? " — " + chapter.subtitle : '');

  // Render scene text
  document.getElementById('scene').innerHTML = `<p>${scene.text}</p>`;

  // Render choices as buttons
  const choicesDiv = document.getElementById('choices');
  choicesDiv.innerHTML = '';

  if (Array.isArray(scene.choices) && scene.choices.length > 0) {
    scene.choices.forEach((choice, idx) => {
      const btn = document.createElement('button');
      btn.textContent = choice.text;
      btn.onclick = () => {
        // Apply flagDelta if present
        if (choice.flagDelta) {
          const { flagKey, delta } = choice.flagDelta;
          setFlag(flagKey, delta);
        }
        // Advance to next scene or chapter
        if (!choice.nextScene) {
          // End of chapter; go to next chapter if available
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
    // No choices (end scene): Offer "Continue"/chapter advance or show end
    const btn = document.createElement('button');
    btn.textContent = "Continue";
    btn.onclick = () => {
      // End of chapter logic
      if (state.chapterIdx < chapters.length - 1) {
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
  renderFlags();
}

function renderFlags() {
  // (Optional, for debug/testing)
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

// Optional: Expose reset for debug
window.resetStoryState = function() {
  state = {
    chapterIdx: 0,
    sceneRef: chapters[0].scenes[0]?.sceneRef,
    flags: buildDefaultFlags(),
  };
  saveState();
  render();
};