import { renderIntro } from "./data/scenes/intro.js";
import { intro2 } from "./data/scenes/intro2.js";

import quests from "./quest.js";
import { renderDictionaryCards, setupDictionarySearch } from "./dictionary.js";

// 씬 관련 변수
let currentLineIndex = 0;
let currentScene = null;

// 변수 설정
export const state = {
    userName: '-',
    balance: 500,
    score: 0,
    currentQuest: '',
};

// 초기 메인 콘텐츠 출력
document.getElementById("intro-contents").innerHTML = renderIntro();

// 상태 박스 렌더링
export function renderStatusBox() {
    const box = document.getElementById("status-box");
    box.innerHTML = `
        <h3>📜 Information</h3>
        <div class="separator"></div>
        <div class="sidebar-line">👤 이름: ${state.userName}</div>
        <div class="sidebar-line">💰 소지금: ${state.balance} 유로</div>
        <div class="sidebar-line">🌟 점수: ${state.score} 점</div>
    `;
}

// 퀘스트 박스 렌더링
export function renderQuestBox(currentQuest) {
    const quest = quests[currentQuest];
    const questBox = document.getElementById("quest-box");

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

// 단어장 박스
function renderDictionaryBox() {
    const box = document.getElementById("dictionary-box");
    box.innerHTML = `
        <h3>📚 단어장</h3>
        <input type="text" id="dictionary-search" placeholder="단어 검색 (fr)" />
        <div id="dictionary-list" class="dictionary-scroll"></div>
    `;
}

// 초기 렌더링 
function init() {
    renderStatusBox();
    renderQuestBox(state.currentQuest);
    renderDictionaryBox();
    renderDictionaryCards();
    setupDictionarySearch();
}

init();

export function loadScene(scene) {

    currentScene = scene;
    currentLineIndex = 0;

    document.getElementById("bg-container").style.backgroundImage = `url('${scene.background_img}')`;
    document.getElementById("bg-container").classList.remove("hidden");

    document.getElementById("overlay-image").src = scene.overlay_img;
    document.getElementById("overlay-image").classList.remove("hidden");

    document.getElementById("dialogue-box").classList.remove("hidden");
    document.getElementById("narration-box").classList.remove("hidden");

    // 첫 대사 출력
    updateDialogue();
}
  
function updateDialogue() {
    const line = currentScene.lines[currentLineIndex];
    const text = line.text;
    const speaker = line.speaker || "";
    
    document.getElementById("dialogue-text").textContent = `${speaker ? speaker + ": " : ""}${text}`;
}

document.addEventListener("click", (e) => {
    if (e.target.closest("#dialogue-box")) {
      currentLineIndex++;
      if (currentLineIndex < currentScene.lines.length) {
        updateDialogue();
      } else {
        alert("🎉 이 장면이 끝났습니다!");
        // 다음 scene 전환 등 처리
      }
    }
});
