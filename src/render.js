import { chapters } from './chaptersIndex.js';
import { state, saveState, resetState, setFlag, applyChoiceFlags, applySceneFlagWrites } from './state.js';
import { getCurrentChapter, getCurrentScene, resolveText, evaluateEnding } from './scene.js';
import { setHTML, applyBackground, showChapterCard, renderFlagBar, renderWithFade } from './ui.js';
import { showEpilogue } from './epilogue.js';
import { updateHighestChapter } from './chapterMenu.js';

const FINAL_CHAPTER_IDX = chapters.length - 1;

// ─── Typewriter state ──────────────────────────────────────────
let _twTimer = null;

function cancelTypewriter() {
  if (_twTimer !== null) {
    clearInterval(_twTimer);
    _twTimer = null;
  }
}

// Splits an HTML string into an array of tokens: tag strings or single chars.
function tokeniseHTML(html) {
  const tokens = [];
  const re = /(<[^>]+>|&[^;]+;|.)/g;
  let m;
  while ((m = re.exec(html)) !== null) tokens.push(m[0]);
  return tokens;
}

// Reveals the scene-text content one character at a time.
// skip() immediately shows everything.
function startTypewriter(fullHTML, skipBtn) {
  cancelTypewriter();
  const el = document.getElementById('scene-text');
  if (!el) return;

  const tokens = tokeniseHTML(fullHTML);
  let idx = 0;
  el.innerHTML = '';

  skipBtn.classList.remove('hidden');

  function finish() {
    cancelTypewriter();
    el.innerHTML = fullHTML;
    skipBtn.classList.add('hidden');
  }

  skipBtn.onclick = finish;

  _twTimer = setInterval(() => {
    if (idx >= tokens.length) {
      finish();
      return;
    }
    // Append up to 3 chars per tick for snappier feel
    let batch = 0;
    while (idx < tokens.length && batch < 3) {
      const tok = tokens[idx++];
      // Skip invisible HTML structure tokens — only count visible chars
      if (!tok.startsWith('<')) batch++;
      el.innerHTML += tok;
    }
  }, 18);
}

// ─── Dialogue rendering ────────────────────────────────────────
// Converts scene text (may contain "<b>Speaker:</b> line" patterns) into
// attributed dialogue bubbles + plain narration paragraphs.
function renderSceneHTML(rawText) {
  const lines = rawText.split('<br>');
  return lines.map(line => {
    const m = line.match(/^<b>([^<:]+):<\/b>\s*(.*)/s);
    if (m) {
      return `<div class="dialogue-line"><span class="speaker">${m[1]}</span><span class="dialogue-text">${m[2]}</span></div>`;
    }
    if (line.trim()) {
      return `<p class="narration">${line}</p>`;
    }
    return '';
  }).join('');
}

export function render() {
  const chapter = getCurrentChapter();
  const scene   = getCurrentScene();

  if (!chapter || !scene) {
    setHTML('scene-text', "<b>Scene not found.</b>");
    setHTML('choices', "");
    setHTML('chapter-title-text', '');
    return;
  }

  // Track furthest chapter reached — also clears replayMode if at frontier
  updateHighestChapter();

  applySceneFlagWrites(scene);

  if (state.chapterIdx === FINAL_CHAPTER_IDX) {
    evaluateEnding();
  }

  saveState();

  if (scene.backgroundKey) applyBackground(scene.backgroundKey);

  setHTML('chapter-title-text',
    (chapter.title || "Chapter " + (state.chapterIdx + 1)) +
    (chapter.subtitle ? " — " + chapter.subtitle : ''));

  // Build scene HTML with dialogue attribution
  const resolvedText = resolveText(scene.text, state.flags);
  const sceneHTML = renderSceneHTML(resolvedText);

  // Render to scene-text, then start typewriter
  const sceneTextEl = document.getElementById('scene-text');
  if (sceneTextEl) sceneTextEl.innerHTML = '';

  // Ensure skip button exists
  let skipBtn = document.getElementById('tw-skip-btn');
  if (!skipBtn) {
    skipBtn = document.createElement('button');
    skipBtn.id = 'tw-skip-btn';
    skipBtn.textContent = 'Skip ▶';
    skipBtn.className = 'tw-skip-btn hidden';
    const storyContent = document.getElementById('story-content');
    if (storyContent) storyContent.insertBefore(skipBtn, storyContent.querySelector('#choices'));
  }

  setHTML('choices', '');
  const choicesDiv = document.getElementById('choices');

  if (scene.isBattleGate) {
    // For battle gates, show full text immediately (no typewriter)
    if (sceneTextEl) sceneTextEl.innerHTML = sceneHTML;
    skipBtn.classList.add('hidden');

    const winBtn = document.createElement('button');
    winBtn.textContent = "⚔️ Fight";
    winBtn.onclick = () => {
      setFlag('battle_won', 1);
      state.sceneRef = scene.battleWinSceneRef;
      renderWithFade(render);
      renderFlagBar();
    };
    const loseBtn = document.createElement('button');
    loseBtn.textContent = "🏳️ Retreat";
    loseBtn.onclick = () => {
      setFlag('battle_lost', 1);
      state.sceneRef = scene.battleLoseSceneRef;
      renderWithFade(render);
      renderFlagBar();
    };
    choicesDiv.appendChild(winBtn);
    choicesDiv.appendChild(loseBtn);
    renderFlagBar();
    return;
  }

  // Build choices (respecting threshold gates)
  function buildChoices() {
    setHTML('choices', '');
    const cd = document.getElementById('choices');

    if (Array.isArray(scene.choices) && scene.choices.length > 0) {
      let visibleCount = 0;
      scene.choices.forEach((choice) => {
        // Threshold gate: hide if requires not met
        if (choice.requires) {
          const { flagKey, min } = choice.requires;
          if ((state.flags[flagKey] ?? 0) < min) return;
        }
        visibleCount++;
        const btn = document.createElement('button');
        btn.textContent = choice.text;
        btn.onclick = () => {
          cancelTypewriter();
          applyChoiceFlags(choice);
          if (!choice.nextScene) {
            if (state.chapterIdx < chapters.length - 1) {
              const nextIdx = state.chapterIdx + 1;
              showChapterCard(chapters[nextIdx], () => {
                state.chapterIdx = nextIdx;
                state.sceneRef   = chapters[nextIdx].scenes[0].sceneRef;
                renderWithFade(render);
                renderFlagBar();
              });
            } else {
              saveState();
              showEpilogue(() => { resetState(); saveState(); render(); });
            }
          } else {
            state.sceneRef = choice.nextScene;
            renderWithFade(render);
            renderFlagBar();
          }
        };
        cd.appendChild(btn);
      });

      // If all threshold-gated choices are hidden, show a Continue button
      if (visibleCount === 0) {
        const btn = document.createElement('button');
        btn.textContent = "Continue";
        btn.onclick = () => {
          cancelTypewriter();
          if (scene.nextScene) {
            state.sceneRef = scene.nextScene;
          } else if (state.chapterIdx < chapters.length - 1) {
            const nextIdx = state.chapterIdx + 1;
            showChapterCard(chapters[nextIdx], () => {
              state.chapterIdx = nextIdx;
              state.sceneRef   = chapters[nextIdx].scenes[0].sceneRef;
              renderWithFade(render);
              renderFlagBar();
            });
            return;
          } else {
            saveState();
            showEpilogue(() => { resetState(); saveState(); render(); });
            return;
          }
          renderWithFade(render);
          renderFlagBar();
        };
        cd.appendChild(btn);
      }
    } else {
      const btn = document.createElement('button');
      btn.textContent = "Continue";
      btn.onclick = () => {
        cancelTypewriter();
        if (scene.nextScene) {
          state.sceneRef = scene.nextScene;
          renderWithFade(render);
          renderFlagBar();
        } else if (state.chapterIdx < chapters.length - 1) {
          const nextIdx = state.chapterIdx + 1;
          showChapterCard(chapters[nextIdx], () => {
            state.chapterIdx = nextIdx;
            state.sceneRef   = chapters[nextIdx].scenes[0].sceneRef;
            renderWithFade(render);
            renderFlagBar();
          });
        } else {
          saveState();
          showEpilogue(() => { resetState(); saveState(); render(); });
        }
      };
      cd.appendChild(btn);
    }
    renderFlagBar();
  }

  // Start typewriter; show choices only after text is fully revealed
  let choicesBuilt = false;
  function buildChoicesOnce() {
    if (choicesBuilt) return;
    choicesBuilt = true;
    buildChoices();
  }

  startTypewriter(sceneHTML, skipBtn);

  // Override skip to build choices immediately on skip
  const origSkipFn = skipBtn.onclick;
  skipBtn.onclick = () => {
    origSkipFn && origSkipFn();
    buildChoicesOnce();
  };

  // Poll via RAF until typewriter completes naturally, then build choices
  function waitForTW() {
    if (_twTimer === null) {
      buildChoicesOnce();
    } else {
      requestAnimationFrame(waitForTW);
    }
  }
  requestAnimationFrame(waitForTW);
}