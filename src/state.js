import { chapters } from './chaptersIndex.js';
import { buildDefaultFlags, assertFlagKey } from './flags.js';

export const SAVE_KEY = "story-mvp:progress:v2";

export let state = {
  chapterIdx: 0,
  sceneRef:   chapters[0].scenes[0]?.sceneRef,
  flags:      buildDefaultFlags(),
};

export function saveState() {
  window.localStorage.setItem(SAVE_KEY, JSON.stringify(state));
}

export function loadState() {
  const s = window.localStorage.getItem(SAVE_KEY);
  if (s) {
    try {
      const parsed = JSON.parse(s);
      if (
        typeof parsed.chapterIdx === "number" &&
        typeof parsed.sceneRef   === "string" &&
        typeof parsed.flags      === "object"
      ) {
        state.chapterIdx = parsed.chapterIdx;
        state.sceneRef   = parsed.sceneRef;
        state.flags      = parsed.flags;
      }
    } catch {
      /* Ignore broken saves */
    }
  }
}

export function setFlag(key, value) {
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

export function applyChoiceFlags(choice) {
  let i = 1;
  let key = "flagDelta";
  while (choice[key]) {
    const { flagKey, delta } = choice[key];
    setFlag(flagKey, delta);
    i++;
    key = "flagDelta" + i;
  }
}

export function applySceneFlagWrites(scene) {
  if (Array.isArray(scene.flagWrites)) {
    scene.flagWrites.forEach(({ flagKey, flagValue }) => {
      setFlag(flagKey, flagValue);
    });
  }
}

export function resetState() {
  state.chapterIdx = 0;
  state.sceneRef   = chapters[0].scenes[0]?.sceneRef;
  state.flags      = buildDefaultFlags();
}