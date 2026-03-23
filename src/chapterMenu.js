import { chapters } from './chaptersIndex.js';
import { state, saveState } from './state.js';
import { render } from './render.js';
import { renderFlagBar } from './ui.js';

// ─── Track highest chapter reached ─────────────────────────────
export function updateHighestChapter() {
  if (state.chapterIdx > state.highestChapterIdx) {
    state.highestChapterIdx = state.chapterIdx;
    saveState();
  }
}

// ─── Build or reuse the overlay ────────────────────────────────
function getOrCreateOverlay() {
  let overlay = document.getElementById('chapter-menu');
  if (!overlay) {
    overlay = document.createElement('div');
    overlay.id = 'chapter-menu';
    overlay.className = 'hidden';
    document.getElementById('main').appendChild(overlay);
  }
  return overlay;
}

// ─── Render chapter list into overlay ──────────────────────────
function buildMenuContent(overlay) {
  overlay.innerHTML = '';

  const header = document.createElement('div');
  header.className = 'chapter-menu-header';

  const title = document.createElement('span');
  title.className = 'chapter-menu-title';
  title.textContent = 'Chapters';

  const closeBtn = document.createElement('button');
  closeBtn.className = 'chapter-menu-close';
  closeBtn.textContent = '✕';
  closeBtn.setAttribute('aria-label', 'Close chapter menu');
  closeBtn.onclick = () => overlay.classList.add('hidden');

  header.appendChild(title);
  header.appendChild(closeBtn);
  overlay.appendChild(header);

  const list = document.createElement('ul');
  list.className = 'chapter-menu-list';

  chapters.forEach((chapter, idx) => {
    const li     = document.createElement('li');
    const btn    = document.createElement('button');
    const locked = idx > state.highestChapterIdx;

    btn.className  = locked ? 'chapter-menu-item chapter-menu-item--locked'
                            : 'chapter-menu-item';
    btn.disabled   = locked;
    btn.setAttribute('aria-label',
      locked ? `Chapter ${chapter.number} — locked`
             : `Jump to Chapter ${chapter.number}: ${chapter.title}`);

    btn.innerHTML = `
      <span class="chapter-menu-num">Ch. ${chapter.number}</span>
      <span class="chapter-menu-name">${chapter.title || 'Untitled'}</span>
      ${locked ? '<span class="chapter-menu-lock">🔒</span>' : ''}
    `;

    if (!locked) {
      btn.onclick = () => {
        overlay.classList.add('hidden');
        state.chapterIdx = idx;
        state.sceneRef   = chapters[idx].scenes[0].sceneRef;

        // Hide epilogue if it was showing
        const epilogueScreen = document.getElementById('epilogue-screen');
        if (epilogueScreen) {
          epilogueScreen.classList.add('hidden');
          epilogueScreen.innerHTML = '';
        }

        saveState();
        render();
        renderFlagBar();
      };
    }

    li.appendChild(btn);
    list.appendChild(li);
  });

  overlay.appendChild(list);
}

// ─── Public: open the menu ─────────────────────────────────────
export function showChapterMenu() {
  const overlay = getOrCreateOverlay();
  buildMenuContent(overlay);
  overlay.classList.remove('hidden');
}