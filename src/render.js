import { chapters } from './chaptersIndex.js';
import { state, saveState, setFlag, applyChoiceFlags, applySceneFlagWrites } from './state.js';
import { getCurrentChapter, getCurrentScene, resolveText, evaluateEnding } from './scene.js';
import { setHTML, applyBackground, showChapterCard, renderFlagBar, renderWithFade } from './ui.js';
import { showEpilogue } from './epilogue.js';
import { updateHighestChapter } from './chapterMenu.js';

const FINAL_CHAPTER_IDX = chapters.length - 1;

export function render() {
  const chapter = getCurrentChapter();
  const scene   = getCurrentScene();

  if (!chapter || !scene) {
    setHTML('scene-text', "<b>Scene not found.</b>");
    setHTML('choices', "");
    setHTML('chapter-title-text', '');
    return;
  }

  // Track furthest chapter reached for chapter menu unlock
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

  setHTML('scene-text',
    `<p>${resolveText(scene.text, state.flags)}</p>`);

  setHTML('choices', '');
  const choicesDiv = document.getElementById('choices');

  if (scene.isBattleGate) {
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

  if (Array.isArray(scene.choices) && scene.choices.length > 0) {
    scene.choices.forEach((choice) => {
      const btn = document.createElement('button');
      btn.textContent = choice.text;
      btn.onclick = () => {
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
      choicesDiv.appendChild(btn);
    });
  } else {
    const btn = document.createElement('button');
    btn.textContent = "Continue";
    btn.onclick = () => {
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
    choicesDiv.appendChild(btn);
  }
  renderFlagBar();
}