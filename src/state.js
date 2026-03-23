import { chapters } from './chaptersIndex.js';
import { buildDefaultFlags, assertFlagKey } from './flags.js';

export const SAVE_KEY = "story-mvp:progress:v4"; // bumped — highestChapterIdx added

export let state = {
  chapterIdx:        0,
  sceneRef:          chapters[0].scenes[0]?.sceneRef,
  flags:             buildDefaultFlags(),
  highestChapterIdx: 0,
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
        parsed.chapterIdx >= 0 &&
        parsed.chapterIdx < chapters.length &&
        typeof parsed.sceneRef === "string" &&
        typeof parsed.flags    === "object"
      ) {
        state.chapterIdx        = parsed.chapterIdx;
        state.sceneRef          = parsed.sceneRef;
        state.flags             = { ...buildDefaultFlags(), ...parsed.flags };
        state.highestChapterIdx = (typeof parsed.highestChapterIdx === "number")
          ? Math.min(parsed.highestChapterIdx, chapters.length - 1)
          : parsed.chapterIdx; // graceful fallback for old saves
      }
    } catch { /* Ignore broken saves */ }
  }
}

export function setFlag(key, value) {
  try {
    assertFlagKey(key);
    state.flags[key] = (typeof value === "number"
      ? (state.flags[key] || 0) + value
      : value
    );
  } catch (e) {
    console.warn("[setFlag]", e.message);
  }
}

export function setFlagHard(key, value) {
  try {
    assertFlagKey(key);
    state.flags[key] = value;
  } catch (e) {
    console.warn("[setFlagHard]", e.message);
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
  if (Array.isArray(scene.flagHardWrites)) {
    scene.flagHardWrites.forEach(({ flagKey, flagValue }) => {
      setFlagHard(flagKey, flagValue);
    });
  }
}

export function resetState() {
  state.chapterIdx        = 0;
  state.sceneRef          = chapters[0].scenes[0]?.sceneRef;
  state.flags             = buildDefaultFlags();
  state.highestChapterIdx = 0;
}