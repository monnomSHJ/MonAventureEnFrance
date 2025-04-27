console.log("✅ script.js 로드됨");

// 필요한 모둘 불러오기
import { renderIntro, setupIntroEvents } from "./data/scenes/intro.js";
import quests from "./quest.js";
import { renderDictionaryCards, setupDictionarySearch } from "./dictionary.js";

// 상태 관리
export const state = {
    userName: '-',
    balance: 500,
    score: 0,
    currentQuest: '',
};

export let currentLineIndex = 0;
export let currentScene = null;

// ===== DOM 요소 캐싱 =====
const monitorBody = document.getElementById("monitor-body");
const backgroundLayer = document.getElementById("background-layer");
const overlayImage = document.getElementById("overlay-image");
const narrationBox = document.getElementById("narration-box");
const dialogueBox = document.getElementById("dialogue-box");
const contentContainer = document.getElementById("content-container");

// 사이드바 요소
const statusBox = document.getElementById("status-box");
const questBox = document.getElementById("quest-box");
const dictionaryBox = document.getElementById("dictionary-box");
const resetBtn = document.getElementById("reset-btn");

// ==== 초기 화면 렌더링 ====
function init() {
    renderStatusBox();
    renderQuestBox(state.currentQuest);
    renderDictionaryBox();
    renderDictionaryCards();
    setupDictionarySearch();
    renderIntroScreen();
}

function renderIntroScreen() {
    monitorBody.innerHTML = renderIntro();
    setupIntroEvents();
}

// ==== 사이드바 박스 렌더링 ====
export function renderStatusBox() {
    statusBox.innerHTML = `
      <h3>📜 Information</h3>
      <div class="separator"></div>
      <div class="sidebar-line">👤 이름: ${state.userName}</div>
      <div class="sidebar-line">💰 소지금: ${state.balance} 유로</div>
      <div class="sidebar-line">🌟 점수: ${state.score} 점</div>
    `;
}

export function renderQuestBox(currentQuest) {
    const quest = quests[currentQuest];
  
    if (!quest) {
      questBox.innerHTML = `
        <h3>📌 퀘스트</h3>
        <hr class="separator">
        <div class="sidebar-line">📭 현재 진행 중인 퀘스트가 없습니다.</div>`;
      return;
    }
  
    const tasksHTML = quest.tasks.map(task => `<li>${task}</li>`).join('');
    questBox.innerHTML = `
      <h3>${quest.title}</h3>
      <hr class="separator">
      <div class="sidebar-line"><ul>${tasksHTML}</ul></div>
    `;
}

function renderDictionaryBox() {
    dictionaryBox.innerHTML = `
      <h3>📚 단어장</h3>
      <input type="text" id="dictionary-search" placeholder="단어 검색 (fr)" />
      <div id="dictionary-list" class="dictionary-scroll"></div>
    `;
}

// ==== 씬 로딩 및 업데이트 ====
export function loadScene(scene) {
    currentScene = scene;
    currentLineIndex = 0;

    monitorBody.innerHTML = `
    <div id="background-layer"></div>
    <img id="overlay-image" />
    <div id="narration-box" class="text-box narration hidden"></div>
    <div id="dialogue-box" class="text-box dialogue hidden">
      <span id="dialogue-text"></span>
    </div>
    <div id="content-container" class="hidden"></div>
    `;

    const backgroundLayer = document.getElementById("background-layer");
    const overlayImage = document.getElementById("overlay-image");
    const narrationBox = document.getElementById("narration-box");
    const dialogueBox = document.getElementById("dialogue-box");
    const contentContainer = document.getElementById("content-container");
  
    // 배경 이미지
    if (scene.background_img) {
      backgroundLayer.style.backgroundImage = `url('${scene.background_img}')`;
      backgroundLayer.classList.remove("hidden");
    } else {
      backgroundLayer.classList.add("hidden");
    }
  
    // 오버레이 이미지
    if (scene.overlay_img) {
      overlayImage.src = scene.overlay_img;
      overlayImage.style.display = "block";
    } else {
      overlayImage.style.display = "none";
    }
  
    // 나레이션
    if (scene.narration) {
      narrationBox.textContent = scene.narration;
      narrationBox.classList.remove("hidden");
    } else {
      narrationBox.classList.add("hidden");
    }
  
    // 대화
    if (scene.lines && scene.lines.length > 0) {
      dialogueBox.classList.remove("hidden");
      updateDialogue();
    } else {
      dialogueBox.classList.add("hidden");
    }
  
    // 콘텐츠 영역
    if (scene.contentHTML) {
      contentContainer.innerHTML = scene.contentHTML;
      contentContainer.classList.remove("hidden");
    } else {
      contentContainer.classList.add("hidden");
    }
  
    // 초기 설정 함수 호출
    if (typeof scene.onMount === "function") {
      scene.onMount();
    }
}

function updateDialogue() {
    const line = currentScene.lines?.[currentLineIndex];
    if (!line) return;
  
    const text = line.text;
    const speaker = line.speaker || "";
  
    document.getElementById("dialogue-text").textContent = `${speaker ? speaker + ": " : ""}${text}`;
}

// ==== 이벤트 바인딩 ====
monitorBody.addEventListener("click", (e) => {
    if (e.target.id === "next-btn") {
      currentLineIndex++;
  
      if (currentScene && currentLineIndex < currentScene.lines.length) {
        updateDialogue();
      } else {
        if (typeof currentScene.nextScene === "function") {
          const next = currentScene.nextScene();
          loadScene(next);
          renderQuestBox(state.currentQuest);
        }
      }
    }
});

resetBtn.addEventListener("click", () => {
    if (confirm("정말 처음으로 돌아가시겠습니까?")) {
      // 상태 초기화
      state.userName = '-';
      state.balance = 500;
      state.score = 0;
      state.currentQuest = '';
  
      renderStatusBox();
      renderQuestBox('');
      renderIntroScreen();
  
      backgroundLayer.classList.add("hidden");
      overlayImage.style.display = "none";
      dialogueBox.classList.add("hidden");
      narrationBox.classList.add("hidden");
    }
});

// ==== 시작 실행 ====
init();
