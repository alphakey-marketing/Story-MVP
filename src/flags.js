import flagRegistry from './flag_registry.json';

/**
 * Return the full registry array.
 */
export function getAllFlags() {
  return flagRegistry.flags;
}

/**
 * Return the metadata object for a flagKey, or null.
 * @param {string} flagKey
 */
export function getFlagData(flagKey) {
  return flagRegistry.flags.find(f => f.flagKey === flagKey) || null;
}

/**
 * Build a default flags object using registry defaults.
 * Example output: { ruthlessness: 0, bond_strength: 0, ... }
 */
export function buildDefaultFlags() {
  const out = {};
  for (const f of flagRegistry.flags) {
    out[f.flagKey] = (typeof f.defaultValue !== 'undefined') ? f.defaultValue : 0;
  }
  return out;
}

/**
 * Validate a flag key (useful for dev assertions).
 * Throws an Error if unknown.
 */
export function assertFlagKey(flagKey) {
  if (!getFlagData(flagKey)) throw new Error(`Unknown flag key: ${flagKey}`);
}