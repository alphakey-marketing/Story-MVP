import { chapters } from './chaptersIndex.js';
import { buildDefaultFlags, assertFlagKey } from './flags.js';

export const SAVE_KEY = "story-mvp:progress:v4";

export let state = {
  chapterIdx:        0,
  sceneRef:          chapters[0].scenes[0]?.sceneRef,
  flags:             buildDefaultFlags(),
  highestChapterIdx: 0,
  highestSceneKey:   chapters[0].scenes[0]?.sceneRef
                       ? '0/' + chapters[0].scenes[0].sceneRef
                       : '0/',   // "chapterIdx/sceneRef" high-water mark
  replayMode:        false,
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
          : parsed.chapterIdx;
        state.highestSceneKey   = (typeof parsed.highestSceneKey === "string")
          ? parsed.highestSceneKey
          : parsed.chapterIdx + '/' + parsed.sceneRef; // fallback for old saves
        // replayMode never persisted — always false on load
      }
    } catch { /* Ignore 