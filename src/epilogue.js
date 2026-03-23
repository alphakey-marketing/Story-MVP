import { state, resetState, saveState } from './state.js';
import { applyBackground } from './ui.js';

const ENDINGS = {
  0: {
    title:   'The Demon King',
    subtitle:'Tenka fubu — all under heaven, by force. In the end, only the force remained.',
    bg:      'honnoji_burning_final',
  },
  1: {
    title:   'The Road That Remained',
    subtitle:'The roads stayed open. The people who walked them never knew your name. That was the point.',
    bg:      'honnoji_dawn_aftermath',
  },
  2: {
    title:   'The Mythic Unifier',
    subtitle:'Something older than politics moved through the age. You were paying attention when it did.',
    bg:      'honnoji_temple_gate_dawn',
  },
  3: {
    title:   'The Standard Bearer',
    subtitle:'The work was the work. You did it. That counts for more than history will say.',
    bg:      'honnoji_dawn_aftermath',
  },
};

function buildLegacyLines(flags) {
  const lines = [];

  if (flags.blade_legacy === 3)
    lines.push('You reforged the blade. The break became part of its strength.');
  else if (flags.blade_legacy === 2)
    lines.push('You kept the blade intact. Every bearer before you did the same.');
  else if (flags.blade_legacy === 1)
    lines.push('You destroyed the blade. The ninth bearer is still waiting.');
  else
    lines.push('You never carried the blade. It found no use for you either.');

  if (flags.mino_resolved === 2)
    lines.push("Dosan's province fell with light casualties. His garden still stands.");
  else if (flags.mino_resolved === 1)
    lines.push("Mino fell by siege. It recovered. Dosan would have had questions about the method.");
  else
    lines.push("Mino fell by encirclement. The markets reopened. The cost is on the ledger.");

  if (flags.kenshin_verdict >= 3)
    lines.push('Kenshin believed in what you were building. That is rarer than victory.');
  else if (flags.kenshin_verdict >= 1)
    lines.push('Kenshin respected you, reluctantly. He filed it under "promising."');
  else
    lines.push('Kenshin died without revising his assessment. That was its own verdict.');

  if (flags.mitsuhide_loyalty >= 4)
    lines.push('Mitsuhide stayed. Not because he had to — because you gave him a reason to.');
  else if (flags.mitsuhide_loyalty > 0)
    lines.push('Mitsuhide served faithfully. Whether faithfully was enough is a different question.');
  else
    lines.push('Mitsuhide kept his own counsel. The category he filed things under grew too heavy.');

  if (flags.ruthlessness >= 7)
    lines.push('The roads opened. So did the graves. History will not separate the two.');
  else if (flags.ruthlessness >= 4)
    lines.push('Force was used when the work required it. The work required it often.');
  else
    lines.push('The campaigns were as clean as campaigns can be. That is not nothing.');

  if (flags.nohime_trust >= 4)
    lines.push('Nohime noted everything. In the end she noted that you had been worth noting.');
  else if (flags.nohime_trust >= 2)
    lines.push('Nohime observed more than she was given credit for. She always did.');

  return lines;
}

// onReplay is a callback passed in by render.js — avoids circular import
export function showEpilogue(onReplay) {
  const flags  = state.flags;
  const route  = flags.ending_route ?? 3;
  const ending = ENDINGS[route] ?? ENDINGS[3];

  if (ending.bg) applyBackground(ending.bg);

  const screen = document.getElementById('epilogue-screen');
  screen.classList.remove('hidden');

  const legacy = buildLegacyLines(flags);

  screen.innerHTML = `
    <div class="epilogue-inner">
      <div class="epilogue-ending-label">Ending</div>
      <div class="epilogue-ending-title">${ending.title}</div>
      <div class="epilogue-flavour">${ending.subtitle}</div>
      <div class="epilogue-divider"></div>
      <div class="epilogue-legacy-heading">What you leave behind</div>
      <ul class="epilogue-legacy-list">
        ${legacy.map(l => `<li>${l}</li>`).join('')}
      </ul>
      <div class="epilogue-divider"></div>
      <button class="epilogue-replay-btn" id="epilogue-replay">
        Play Again
      </button>
    </div>
  `;

  document.getElementById('epilogue-replay').onclick = () => {
    screen.classList.add('hidden');
    screen.innerHTML = '';
    if (typeof onReplay === 'function') onReplay();
  };
}