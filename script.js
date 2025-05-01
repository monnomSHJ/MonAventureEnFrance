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
export const overlay = document.querySelector('.overlay');
const contentMain = document.getElementById("content-main");
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
  dictionaryOverlay.classList.remove('show');
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
contentMain.addEventListener("click", async (e) => {
  if (e.target.id === "next-btn") {
    if (isTyping) {
      skipTyping = true;
      return;
    }

    currentLineIndex++;

    if (currentScene && currentLineIndex < currentScene.lines.length) {
      await updateDialogue();
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
  if (!scene) {
    console.error("로드할 scene이 없습니다!", scene);
    return;
  }

  console.log("씬 로딩", scene);

  currentScene = scene;
  currentLineIndex = 0;

  if (scene.contentHTML) {
    contentMain.innerHTML = '';
    const container = document.createElement("div");
    container.innerHTML = scene.contentHTML;
    container.classList.add('content-html-container');
    contentMain.appendChild(container);

  } else {

    contentMain.innerHTML = `
      <div id="bg-container" class="bg-container hidden"></div>
      <div id="narration-box" class="text-box narration hidden">example text</div>
      <div id="dialogue-box" class="text-box dialogue hidden">
        <div class="dialogue-container">
          <div id="dialogue-text">example text</div>
          <div id="next-btn" class="next-btn">▶</div>
        </div>
      </div>
      <div id="overlay-image" class="overlay-image hidden"></div>
      `;

    const bgContainer = document.getElementById("bg-container");
    const dialogueBox = document.getElementById("dialogue-box");
    const narrationBox  = document.getElementById("narration-box");
    const overlayImg = document.getElementById("overlay-image");

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

    if (scene.narration) {
      narrationBox.textContent = scene.narration;
      narrationBox.classList.remove('hidden');
    } else {
      narrationBox.classList
      .add('hidden');
    }
  }

  // 초기 설정 함수 호출
  if (typeof scene.onMount === "function") {
    scene.onMount();
  }
}



// 디알로그 업데이트 
let isTyping = false;
let skipTyping = false;

async function updateDialogue() {

  const line = currentScene.lines?.[currentLineIndex];
  if (!line) return;

  const overlayImg = document.getElementById("overlay-image");
  const dialogueTextEl = document.getElementById("dialogue-text");

  const text = line.text;
  const speaker = line.speaker || "";

  dialogueTextEl.innerHTML = `
    <div class="speaker">${speaker}</div>
    <div class="text"></div>
  `;
  const textEl = dialogueTextEl.querySelector('.text');

  if (line.overlayImg) {
    overlayImg.style.backgroundImage = `url('${line.overlayImg}')`;
    overlayImg.classList.remove('hidden');
  } else {
    overlayImg.classList.add('hidden');
  }

  isTyping = true;
  skipTyping = false;

  let currentIndex = 0;

  function typeChar() {
    if (skipTyping) {
      textEl.innerHTML = text;
      isTyping = false;
      return;
    }

    if (currentIndex < text.length) {
      textEl.innerHTML += text[currentIndex++];
      setTimeout(typeChar, 30);
    } else {
      isTyping = false;
    }
  }

  typeChar();
}



window.addEventListener("beforeunload", function (e) {
  e.preventDefault();
  e.returnValue = "";
});


