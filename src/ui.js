import { BG_MAP, BG_CLASSES } from './bgMap.js';
import { state } from './state.js';

export function setHTML(id, html) {
  const el = document.getElementById(id);
  if (!el) return;
  const fresh = el.cloneNode(false);
  fresh.innerHTML = html;
  el.parentNode.replaceChild(fresh, el);
}

export function applyBackground(backgroundKey) {
  const cls = BG_MAP[backgroundKey] || BG_MAP['default'];
  BG_CLASSES.forEach(c => document.body.classList.remove(c));
  document.body.classList.add(cls);
}

export function showChapterCard(chapter, done) {
  const card = document.getElementById('chapter-card');
  document.getElementById('chapter-card-number').textContent =
    'Chapter ' + chapter.number;
  document.getElementById('chapter-card-title').textContent =
    chapter.title || '';
  document.getElementById('chapter-card-subtitle').textContent =
    chapter.subtitle || '';

  card.classList.remove('hidden', 'fading-out');

  setTimeout(() => {
    card.classList.add('fading-out');
    setTimeout(() => {
      card.classList.add('hidden');
      card.classList.remove('fading-out');
      done();
    }, 600);
  }, 2500);
}

const FLAG_MAX = 8;
// FIXED: removed dead keys 'weapon_legacy' and 'road_command' — not in flag_registry.json
const FLAG_BAR_KEYS = [
  'ruthlessness', 'political_power', 'mitsuhide_loyalty',
  'bond_strength', 'nohime_trust', 'ieyasu_trust'
];

export function renderFlagBar() {
  FLAG_BAR_KEYS.forEach(key => {
    const el = document.getElementById('flag-' + key);
    if (!el) return;
    const val = Math.max(0, state.flags[key] ?? 0);
    el.style.width = Math.min(100, (val / FLAG_MAX) * 100) + '%';
  });
}

export function renderWithFade(fn) {
  const content = document.getElementById('story-content');
  content.classList.add('fading');
  setTimeout(() => {
    fn();
    content.classList.remove('fading');
  }, 200);
}