import { foolOfOwariChapter } from './fool_of_owari.js';

const SAVE_KEY = "story-mvp:progress:v1";

let state = {
  sceneRef: foolOfOwariChapter.scenes[0].sceneRef,
  flags: {},
};

function saveState() {
  window.localStorage.setItem(SAVE_KEY, JSON.stringify(state));
}
function loadState() {
  const s = window.localStorage.getItem(SAVE_KEY);
  if (s) {
    try {
      const parsed = JSON.parse(s);
      if (parsed.sceneRef) state = parsed;
    } catch { /* Ignore broken saves */ }
  }
}
function setFlag(key, value) {
  if (!key) return;
  state.flags[key] = (typeof value === "number" ? ((state.flags[key] || 0) + value) : value);
}

function renderScene() {
  const chapter = foolOfOwariChapter.chapter;
  const scenes = foolOfOwariChapter.scenes;
  const scene = scenes.find(s => s.sceneRef === state.sceneRef);
  if (!scene) {
    document.getElementById('scene').innerHTML = "<b>Scene not found.</b>";
    document.getElementById('choices').innerHTML = "";
    return;
  }
  // Save progress after scene change
  saveState();

  document.getElementById('chapter-title').textContent = chapter.title + (chapter.subtitle ? (" — " + chapter.subtitle) : '');

  // Minimal background/text info (MVP: just show the keys)
  let bgHtml = '';
  if (scene.backgroundKey) bgHtml += `<div class="scenebg">Background: ${scene.backgroundKey}</div>`;
  if (scene.bgmKey) bgHtml += `<div class="scenebg">Music: ${scene.bgmKey}</div>`;

  // Dialogue
  let dlgHtml = scene.dialogueLines.map(line => {
    let speaker = line.speakerName ? `<span class="speaker">${line.speakerName}:</span> ` : '';
    return `<div class="dialogue">${speaker}${line.text}</div>`;
  }).join("");

  document.getElementById('scene').innerHTML = bgHtml + dlgHtml;

  // Scene-level side effects: unconditional flagWrites
  if (scene.flagWrites && Array.isArray(scene.flagWrites)) {
    scene.flagWrites.forEach(fw => setFlag(fw.flagKey, fw.flagValue));
    saveState();
  }

  // Choices
  const container = document.getElementById('choices');
  container.innerHTML = '';
  if (Array.isArray(scene.choices) && scene.choices.length > 0) {
    scene.choices.forEach(choice => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.textContent = choice.choiceText;
      btn.onclick = () => {
        if (choice.flagKey && choice.flagValue !== null)
          setFlag(choice.flagKey, choice.flagValue);
        if (choice.flagKey2 && choice.flagValue2 !== null)
          setFlag(choice.flagKey2, choice.flagValue2);
        state.sceneRef = choice.nextSceneRef;
        renderScene();
      };
      container.appendChild(btn);
    });
  } else if (scene.nextSceneRef) {
    // No choices: auto-advance after delay or button
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.textContent = "Continue";
    btn.onclick = () => {
      state.sceneRef = scene.nextSceneRef;
      renderScene();
    };
    container.appendChild(btn);
  } else if (scene.isChapterEnd) {
    // Chapter finished
    container.innerHTML = '<div class="dialogue" style="color:#ffb">End of Chapter.</div>';
    window.localStorage.removeItem(SAVE_KEY);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  loadState();
  renderScene();
});
