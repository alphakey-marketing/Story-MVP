import { loadState, saveState, resetState } from './state.js';
import { render } from './render.js';
import { showChapterMenu } from './chapterMenu.js';

// ─── INIT ──────────────────────────────────────────────────────
loadState();
render();

// ─── Chapter menu button ───────────────────────────────────────
const menuBtn = document.getElementById('chapter-menu-btn');
if (menuBtn) menuBtn.onclick = () => showChapterMenu();

// ─── Dev reset (browser console only) ─────────────────────────
window.resetStoryState = function() {
  resetState();
  saveState();
  render();
};