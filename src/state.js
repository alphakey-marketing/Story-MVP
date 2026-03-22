import { chapters } from './chaptersIndex.js';
import { buildDefaultFlags, assertFlagKey } from './flags.js';

export const SAVE_KEY = "story-mvp:progress:v3"; // bumped — new flags added

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
        state.flags      = { ...buildDefaultFlags(), ...parsed.flags };
      }
    } catch { /* Ignore broken saves */ }
  }
}

// Additive — existing behaviour unchanged
export function setFlag(key, value) {
  try {
    assertFlagKey(key);
    state.flags[key] = (typeof value === "number"
      ? (state.flags[key] || 0) + value
      : value
    );
  } catch { }
}

// Hard-set — for blade_legacy, mino_resolved, ending_route
export function setFlagHard(key, value) {
  try {
    assertFlagKey(key);
    state.flags[key] = value;
  } catch { }
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
  // Hard-set support: flagHardSet: { flagKey, value }
  if (choice.flagHardSet) {
    setFlagHard(choice.flagHardSet.flagKey, choice.flagHardSet.value);
  }
}

export function applySceneFlagWrites(scene) {
  if (Array.isArray(scene.flagWrites)) {
    scene.flagWrites.forEach(({ flagKey, flagValue }) => {
      setFlag(flagKey, flagValue);
    });
  }
  // Hard-set support: flagHardWrites: [{ flagKey, flagValue }]
  if (Array.isArray(scene.flagHardWrites)) {
    scene.flagHardWrites.forEach(({ flagKey, flagValue }) => {
      setFlagHard(flagKey, flagValue);
    });
  }
}

export function resetState() {
  state.chapterIdx = 0;
  state.sceneRef   = chapters[0].scenes[0]?.sceneRef;
  state.flags      = buildDefaultFlags();
}