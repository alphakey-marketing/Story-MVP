import { chapters } from './chaptersIndex.js';
// FIXED: merged two separate imports of state.js into one
import { state, setFlagHard } from './state.js';

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

// Evaluate a single flagCondition object against current flags
function evalCondition({ flagKey, operator, value }, flags) {
  const current = flags[flagKey] ?? 0;
  if (operator === "gte") return current >= value;
  if (operator === "lte") return current <= value;
  if (operator === "eq")  return current === value;
  if (operator === "gt")  return current > value;
  if (operator === "lt")  return current < value;
  return false;
}

export function resolveSceneRef(baseRef) {
  const chapter = getCurrentChapter();
  const variants = chapter.scenes.filter(s =>
    s.sceneRef.startsWith(baseRef + "_") &&
    (s.flagCondition || s.flagConditions)
  );
  for (const variant of variants) {
    // Multi-condition (AND): flagConditions array — all must pass
    if (Array.isArray(variant.flagConditions)) {
      if (variant.flagConditions.every(c => evalCondition(c, state.flags))) {
        return variant.sceneRef;
      }
      continue;
    }
    // Single condition: backward-compatible
    if (variant.flagCondition && evalCondition(variant.flagCondition, state.flags)) {
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

// Called once at Ch13 S01 entry. Sets ending_route hard flag.
// Evaluation order: Bad (0) → IF (1) → Mythic (2) → Standard (3)
export function evaluateEnding() {
  if (state.flags.ending_route !== -1) return; // already evaluated
  const f = state.flags;

  const isBad =
    f.ruthlessness     >= 7 &&
    f.mitsuhide_loyalty <= 0;

  const isIF =
    f.mitsuhide_loyalty >= 4 &&
    f.bond_strength     >= 5 &&
    f.nohime_trust      >= 4 &&
    f.ieyasu_trust      >= 3 &&
    f.katsuie_loyalty   >= 3 &&
    f.political_power   >= 4;

  const isMythic =
    f.supernatural_affinity >= 4 &&
    f.omen_read             >= 4 &&
    f.blade_legacy          === 3;

  if (isBad)    { setFlagHard('ending_route', 0); return; }
  if (isIF)     { setFlagHard('ending_route', 1); return; }
  if (isMythic) { setFlagHard('ending_route', 2); return; }
  setFlagHard('ending_route', 3); // Standard
}