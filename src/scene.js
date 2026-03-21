import { chapters } from './chaptersIndex.js';
import { state } from './state.js';

export function resolveText(text, flags) {
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

export function getCurrentChapter() {
  return chapters[state.chapterIdx];
}

export function resolveSceneRef(baseRef) {
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

export function getCurrentScene() {
  const chapter = getCurrentChapter();
  const resolved = resolveSceneRef(state.sceneRef);
  return chapter.scenes.find(s => s.sceneRef === resolved);
}