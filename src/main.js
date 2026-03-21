import { loadState, saveState, resetState } from './state.js';
import { render } from './render.js';

// --- INIT ---
loadState();
render();

// Expose reset for debug use in browser console
window.resetStoryState = function() {
  resetState();
  saveState();
  render();
};