console.log("script.js 로드됨");

// 필요한 모듈 불러오기
import quests from "./quest.js";
import { loadDictionary } from "./dictionary.js";
import { renderIntro, setupIntroEvents } from "./data/scenes/intro.js";

// 상태 관리
export const state = {
  userName: "-",
  balance: 500,
  score: 0,
  currentQuest: '',
};

// Scene 관리
export let currentLineIndex = 0;
export let currentScene = null;



/* ===== DOM 요소 캐싱 ===== */
const overlay = document.querySelector('.overlay');

const contentMain = document.getElementById("content-main");
const bgContainer = document.getElementById("bg-container");
const overlayImg = document.getElementById("overlay-image")
const narrationBox  = document.getElementById("narration-box");
const dialogueBox = document.getElementById("dialogue-box");

const statusBar = document.querySelector('.status-bar');
const questTitle = document.querySelector('.quest-title');
const questList = document.querySelector('.quest-list');



/* ===== 단어장 기능 ===== */
// 단어장 토글
const dictionaryPanel = document.querySelector('.dictionary-panel');
const dictionaryPanelHeader = document.getElementById('dictionary-panel-header');
const dictionaryPanelArrow = document.querySelector('.dictionary-panel-header-arrow');
const dictionaryOverlay = document.querySelector('.dictionary-overlay');


dictionaryPanelHeader.addEventListener('click', () => {
  console.log("눌림");
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
  overlay.classList.remove('show');
  dictionaryPanelArrow.textContent = '▲';
});



/* ===== 렌더링 함수 ===== */

// 상태창 렌더링
export function renderStatusBar() {
  if (!statusBar) return;

  const statusItems = statusBar.querySelectorAll('.status-item');
  statusItems[0].querySelector('.value').textContent = state.userName;
  statusItems[1].querySelector('.value').textContent = `${state.balance} 유로`
  statusItems[2].querySelector('.value').textContent = `${state.score} 점`;
}

// 퀘스트 렌더링
export function renderQuest() {
  const current = state.currentQuest;
  const questData = quests[current];

  if (!questData) {
    questTitle.textContent = "📌 현재 퀘스트가 없습니다.";
    questList.innerHTML = "다음 퀘스트를 기다려주세요!";
    return;
  }

  questTitle.textContent = questData.title;
  questList.innerHTML = questData.tasks.map(task => `<div>${task}</div>`).join('');
}



/* ===== 초기화면 렌더링 ===== */
function init() {
  renderStatusBar();
  renderQuest();
  loadDictionary();
  renderIntroScreen();
}

init();



/* ===== 인트로 화면 렌더링 ===== */
function renderIntroScreen() {
  contentMain.innerHTML = renderIntro();
  setupIntroEvents();
}


/* ===== 다음 텍스트 ===== */
// 이벤트 
contentMain.addEventListener("click", (e) => {
  if (e.target.id === "next-btn") {
    currentLineIndex++;

    if (currentScene && currentLineIndex < currentScene.lines.length) {
      updateDialogue();
    } else {
      if (typeof currentScene.nextScene === "function") {
        const next = currentScene.nextScene();
        loadScene(next);
        renderQuest(state.currentQuest);
      }
    }
  }
}); 



/* ===== 씬 로딩 및 업데이트 ===== */
export function loadScene(scene) {
  currentScene = scene;
  currentLineIndex = 0;

  // 배경 이미지 
  if (scene.background_img) {
    bgContainer.style.backgroundImage = `url('${scene.background_img}')`;
    bgContainer.classList.remove('hidden');
  } else {
    bgContainer.classList.add('hidden');
  }

  if (scene.lines && scene.lines.length > 0) {
    dialogueBox.classList.remove("hidden");
    updateDialogue();
  } else {
    dialogueBox.classList.add("hidden");
  }

  // 초기 설정 함수 호출
  if (typeof scene.onMount === "function") {
    scene.onMount();
  }
}



// 디알로그 업데이트 
function updateDialogue() {
  const line = currentScene.lines?.[currentLineIndex];
  if (!line) return;

  const text = line.text;
  const speaker = line.speaker || "";

  document.getElementById("dialogue-text").textContent = `${speaker ? speaker + ": " : ""}${text}`;

  if (line.overlayImg) {
    overlayImg.style.backgroundImage = `url('${line.overlayImg}')`;
    overlayImg.classList.remove('hidden');
  } else {
    overlayImg.classList.add('hidden');
  }

  if (line.narration) {
    narrationBox.textContent = line.narration;
    narrationBox.classList.remove('hidden');
  } else {
    narrationBox.classList.add('hidden');
  }
}