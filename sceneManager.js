import { state } from "./script.js";
import { renderStatusBar, renderQuest } from "./statusBar.js";
import { showProductionPopup } from "./productionPopup.js";
import { showMiniMapGame } from "./miniMapGamePopup.js";
import { maybeShowChoiceAgain, showChoicePopup } from "./chociePopup.js";

// Scenes
import { getIntro1Scene } from "./data/scenes/intro1.js";
import { getIntro2Scene } from "./data/scenes/intro2.js";
import { getReservation1Scene } from "./data/scenes/reservation1.js";
import { getReservation2Scene } from "./data/scenes/reservation2.js";
import { getAirport1Scene } from "./data/scenes/airport1.js";
import { getAirport2Scene } from "./data/scenes/airport2.js";
import { getAirport3Scene } from "./data/scenes/airport3.js";
import { getAirport4Scene } from "./data/scenes/airport4.js";
import { getHotel1Scene } from "./data/scenes/hotel1.js";
import { getHotel2Scene } from "./data/scenes/hotel2.js";
import { getHotel3Scene } from "./data/scenes/hotel3.js";
import { getHotel4Scene } from "./data/scenes/hotel4.js";
import { getHotel5Scene } from "./data/scenes/hotel5.js";
import { getRestaurant1Scene } from "./data/scenes/restaurant1.js";
import { getRestaurant2Scene } from "./data/scenes/restaurant2.js";
import { getRestaurant3Scene } from "./data/scenes/restaurant3.js";
import { getRestaurant4Scene } from "./data/scenes/restaurant4.js";
import { getRestaurant5Scene } from "./data/scenes/restaurant5.js";
import { getCafe1Scene } from "./data/scenes/cafe1.js";
import { getCafe2Scene } from "./data/scenes/cafe2.js";
import { getCafe3Scene } from "./data/scenes/cafe3.js";
import { getCafe4Scene } from "./data/scenes/cafe4.js";
import { getEiffelTower1Scene } from "./data/scenes/eiffelTower1.js";
import { getEiffelTower2Scene } from "./data/scenes/eiffelTower2.js";
import { getLouvre1Scene } from "./data/scenes/louvre1.js";
import { getLouvre2Scene } from "./data/scenes/louvre2.js";
import { getLouvre3Scene } from "./data/scenes/louvre3.js";
import { getToilet1Scene } from "./data/scenes/toilet1.js";
import { getToilet2Scene } from "./data/scenes/toilet2.js";
import { getToilet3Scene } from "./data/scenes/toilet3.js";
import { getToilet4Scene } from "./data/scenes/toilet4.js";
import { getLyon1Scene } from "./data/scenes/lyon1.js";
import { getLyon1aScene } from "./data/scenes/lyon1a.js";
import { getLyon1bScene } from "./data/scenes/lyon1b.js";
import { getLyon1cScene } from "./data/scenes/lyon1c.js";
import { getMarseille1Scene } from "./data/scenes/marseille1.js";
import { getMarseille1aScene } from "./data/scenes/marseille1a.js";
import { getMarseille1bScene } from "./data/scenes/marseille1b.js";
import { getMarseille1cScene } from "./data/scenes/marseille1c.js";
import { getStrasbourg1Scene } from "./data/scenes/strasbourg1.js";
import { getStrasbourg1aScene } from "./data/scenes/strasbourg1a.js";
import { getStrasbourg1bScene } from "./data/scenes/strasbourg1b.js";
import { getStrasbourg1cScene } from "./data/scenes/strasbourg1c.js";
import { getBordeaux1Scene } from "./data/scenes/bordeaux1.js";
import { getBordeaux1aScene } from "./data/scenes/bordeaux1a.js";
import { getBordeaux1bScene } from "./data/scenes/bordeaux1b.js";
import { getBordeaux1cScene } from "./data/scenes/bordeaux1c.js";
import { getLyon2Scene } from "./data/scenes/lyon2.js";
import { getMarseille2Scene } from "./data/scenes/marseille2.js";
import { getStrasbourg2Scene } from "./data/scenes/strasbourg2.js";
import { getBordeaux2Scene } from "./data/scenes/bordeaux2.js";
import { getEnd1Scene } from "./data/scenes/end1.js";
import { getEnd2Scene } from "./data/scenes/end2.js";

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
            
            if (scene.narration) {
                document.getElementById("narration-box").innerHTML = `${scene.narration}`;
                document.getElementById("narration-box").classList.remove('hidden');
            }
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
  
    const text = typeof line.text === 'function' ? line.text() : line.text;
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
        showMiniMapGame(currentScene);
        overlay.classList.add("show");
        return;
    }

    if (maybeShowChoiceAgain(line)) {
        overlay.classList.add("show");
        return;
    } 

    if (line.choices) {
        showChoicePopup(line.choices);
        overlay.classList.add("show");
        return;
    }

    if (typeof line.customAction === "function") {
        line.customAction();
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
            await handleNextLine();
        }
    });

    window.addEventListener("keydown", async (e) => {
        if (e.code === "Space") {
            const dialogueBox = document.getElementById("dialogue-box");

            if (!dialogueBox ||
                dialogueBox.classList.contains("hidden") ||
                overlay.classList.contains("show")
            ) return;

            e.preventDefault();

            await handleNextLine();
        }
    });
}

async function handleNextLine() {
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
        airport3: () => loadScene(getAirport3Scene()),
        airport4: () => loadScene(getAirport4Scene()),
        hotel1: () => loadScene(getHotel1Scene()),
        hotel2: () => loadScene(getHotel2Scene()),
        hotel3: () => loadScene(getHotel3Scene()),
        hotel4: () => loadScene(getHotel4Scene()),
        hotel5: () => loadScene(getHotel5Scene()),
        restaurant1: () => loadScene(getRestaurant1Scene()),
        restaurant2: () => loadScene(getRestaurant2Scene()),
        restaurant3: () => loadScene(getRestaurant3Scene()),
        restaurant4: () => loadScene(getRestaurant4Scene()),
        restaurant5: () => loadScene(getRestaurant5Scene()),
        cafe1: () => loadScene(getCafe1Scene()),
        cafe2: () => loadScene(getCafe2Scene()),
        cafe3: () => loadScene(getCafe3Scene()),
        cafe4: () => loadScene(getCafe4Scene()),
        eiffelTower1: () => loadScene(getEiffelTower1Scene()),
        eiffelTower2: () => loadScene(getEiffelTower2Scene()),
        louvre1: () => loadScene(getLouvre1Scene()),
        louvre2: () => loadScene(getLouvre2Scene()),
        louvre3: () => loadScene(getLouvre3Scene()),
        toilet1: () => loadScene(getToilet1Scene()),
        toilet2: () => loadScene(getToilet2Scene()),
        toilet3: () => loadScene(getToilet3Scene()),
        toilet4: () => loadScene(getToilet4Scene()),
        lyon1: () => loadScene(getLyon1Scene()),
        lyon1a: () => loadScene(getLyon1aScene()),
        lyon1b: () => loadScene(getLyon1bScene()),
        lyon1c: () => loadScene(getLyon1cScene()),
        marseille1: () => loadScene(getMarseille1Scene()),
        marseille1a: () => loadScene(getMarseille1aScene()),
        marseille1b: () => loadScene(getMarseille1bScene()),
        marseille1c: () => loadScene(getMarseille1cScene()),
        strasbourg1: () => loadScene(getStrasbourg1Scene()),
        strasbourg1a: () => loadScene(getStrasbourg1aScene()),
        strasbourg1b: () => loadScene(getStrasbourg1bScene()),
        strasbourg1c: () => loadScene(getStrasbourg1cScene()),
        bordeaux1: () => loadScene(getBordeaux1Scene()),
        bordeaux1a: () => loadScene(getBordeaux1aScene()),
        bordaeux1b: () => loadScene(getBordeaux1bScene()),
        bordeaux1c: () => loadScene(getBordeaux1cScene()),
        lyon2: () => loadScene(getLyon2Scene()),
        marseille2: () => loadScene(getMarseille2Scene()),
        strasbourg2: () => loadScene(getStrasbourg2Scene()),
        bordeaux2: () => loadScene(getBordeaux2Scene()),
        end1: () => loadScene(getEnd1Scene()),
        end2: () => loadScene(getEnd2Scene())
        };

        if (sceneMap[sceneId]) {
            console.log(`이동 중: ${sceneId}`);
            sceneMap[sceneId]();
        } else {
            console.warn(`${sceneId} 씬을 찾을 수 없습니다.`);
        }
    };
}
