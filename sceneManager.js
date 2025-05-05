import { state } from "./script.js";
import { renderStatusBar, renderQuest } from "./statusBar.js";
import { showProductionPopup } from "./productionPopup.js";
import { showMiniMapGame } from "./miniMapGamePopup.js";

// Scenes
import { getIntro1Scene } from "./data/scenes/intro1.js";
import { getIntro2Scene } from "./data/scenes/intro2.js";
import { getReservation1Scene } from "./data/scenes/reservation1.js";
import { getReservation2Scene } from "./data/scenes/reservation2.js";
import { getAirport1Scene } from "./data/scenes/airport1.js";
import { getAirport2Scene } from "./data/scenes/airport2.js";
import { getAirport3Scene } from "./data/scenes/airport3.js";

// State
export let currentScene = null;
export let currentLineIndex = 0;
let isTyping = false;
let skipTyping = false;
let lastProductionData = null;

export const overlay = document.querySelector('.overlay');
const contentMain = document.getElementById("content-main");



export function incrementLineIndex() {
    currentLineIndex++;
}

export function setLineIndex(idx) {
    currentLineIndex = idx;
}


// Load Scene
export function loadScene(scene) {
    const overlayEl = document.getElementById("transition-overlay");
  
    if (!scene) {
      console.error("로드할 scene이 없습니다!", scene);
      return;
    }
  
    overlayEl.classList.add("show");

    setTimeout(() => {
      currentScene = scene;
      currentLineIndex = 0;
      console.log(`씬 로드: ${currentScene.id}`);
  
        if (scene.contentHTML) {
            contentMain.innerHTML = '';
            const container = document.createElement("div");
            container.innerHTML = currentScene.contentHTML;
            container.classList.add("content-html-container");
            contentMain.appendChild(container);
        } else {
            contentMain.innerHTML = `
            <div id="bg-container" class="bg-container"></div>
            <div id="narration-box" class="text-box narration hidden">example text</div>
            <div id="dialogue-box" class="text-box dialogue">
                <div class="dialogue-container">
                <div id="dialogue-text">example text</div>
                <div id="next-btn" class="next-btn"></div>
                </div>
            </div>
            <div id="overlay-image" class="overlay-image hidden"></div>
            <div id="person-image" class="person-image hidden"></div>
            `;

            const bgContainer = document.getElementById("bg-container");
            bgContainer.style.backgroundImage = `url('${currentScene.background_img}')`;
        }
  
        if (typeof scene.onMount === "function") scene.onMount();
        
  
        setTimeout(() => {
            overlayEl.classList.remove("show");
            updateDialogue();
        }, 200);
    }, 500);
}



// Update Dialogue
export async function updateDialogue() {
    const line = currentScene.lines?.[currentLineIndex];

    if (!line) return;
  
    const overlayImg = document.getElementById("overlay-image");
    const personImg = document.getElementById("person-image");
    const dialogueTextEl = document.getElementById("dialogue-text");
    const bgContainer = document.getElementById("bg-container");
  
    const text = line.text;
    const speaker = line.speaker || "";
  
    dialogueTextEl.innerHTML = `
        <div class="speaker">${speaker}</div>
        <div class="text"></div>
        `;
    const textEl = dialogueTextEl.querySelector(".text");
  
    // 이미지 처리
    if (line.overlayImg) {
      overlayImg.style.backgroundImage = `url('${line.overlayImg}')`;
      overlayImg.classList.remove("hidden");
      bgContainer.classList.add("darken");
    } else {
      overlayImg.classList.add("hidden");
      bgContainer.classList.remove("darken");
    }
  
    if (line.personImg) {
      personImg.style.backgroundImage = `url('${line.personImg}')`;
      personImg.classList.remove("hidden");
    } else {
      personImg.classList.add("hidden");
    }
  
    // 인터랙션 처리
    if (line.production) {
        lastProductionData = line.production;
        showProductionPopup(line.production);
        overlay.classList.add("show");
        return;
    }
    
    if (line.miniGame) {
        showMiniMapGame(currentScene, () => {
        currentLineIndex++;
        updateDialogue();
    }, () => {
        alert("잘못된 위치에 도착했어요!");
    });
        overlay.classList.add("show");
        return;
    }

    overlay.classList.remove("show");
  


    // 타이핑 효과
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



// setup Dialogue Click
export function setupDialogueClick() {
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
} 



// 디버그 메뉴
export function setupDebugMenu() {
    window.goToScene = function (sceneId) {
        const sceneMap = {
        intro: () => loadScene(getIntro1Scene()),
        intro2: () => loadScene(getIntro2Scene()),
        reservation1: () => loadScene(getReservation1Scene()),
        reservation2: () => loadScene(getReservation2Scene()),
        airport1: () => loadScene(getAirport1Scene()),
        airport2: () => loadScene(getAirport2Scene()),
        airport3: () => loadScene(getAirport3Scene())
        };

        if (sceneMap[sceneId]) {
            console.log(`이동 중: ${sceneId}`);
            sceneMap[sceneId]();
        } else {
            console.warn(`${sceneId} 씬을 찾을 수 없습니다.`);
        }
    };
}
