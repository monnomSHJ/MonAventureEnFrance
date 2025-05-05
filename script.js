console.log("script.js 로드됨");

// 필요한 모듈 불러오기
import { loadDictionary } from "./dictionary.js";
import { renderStatusBar, renderQuest } from './statusBar.js';
import { loadScene, setupDialogueClick, setupDebugMenu } from './sceneManager.js';

import { getIntro1Scene } from "./data/scenes/intro1.js";



// 상태 관리
export const state = {
  userName: "-",
  balance: 500,
  score: 0,
  currentQuest: '',
};



// 단어장 기능
const dictionaryPanel = document.querySelector('.dictionary-panel');
const dictionaryPanelHeader = document.getElementById('dictionary-panel-header');
const dictionaryPanelArrow = document.querySelector('.dictionary-panel-header-arrow');
const dictionaryOverlay = document.querySelector('.dictionary-overlay');

dictionaryPanelHeader.addEventListener('click', () => {
  dictionaryPanel.classList.toggle('open');
  dictionaryOverlay.classList.toggle('show');

  if (dictionaryPanel.classList.contains('open')) {
    dictionaryPanelArrow.textContent = '▼';
  } else {
    dictionaryPanelArrow.textContent = '▲';
  }
});

dictionaryOverlay.addEventListener('click', () => {
  dictionaryPanel.classList.remove('open');
  dictionaryOverlay.classList.remove('show');
  dictionaryPanelArrow.textContent = '▲';
});



// 초기화
function init() {
  renderStatusBar();
  renderQuest();
  loadDictionary();
  loadScene(getIntro1Scene());
  setupIntroEvents();
  setupDialogueClick();
  setupDebugMenu();
}

init();



// 안전 저장 방지
window.addEventListener("beforeunload", function (e) {
  e.preventDefault();
  e.returnValue = "";
});