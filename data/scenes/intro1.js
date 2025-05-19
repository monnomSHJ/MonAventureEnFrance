import { state } from "../../script.js";
import { loadScene, overlay } from "../../sceneManager.js";
import { renderStatusBar } from "../../statusBar.js";
import { getIntro2Scene } from "./intro2.js";

export function getIntro1Scene() {
    return {
        id: "intro1",
        background_img: "",
        narration: "",
        lines: [],
        contentHTML: `
        <div id="intro-screen" class="intro-screen">
          <h1 class="main-title">Mon Aventure en France</h1>
          <div class="description">
            이 게임은 프랑스 여행을 통해 언어와 문화를 체험할 수 있는 인터랙티브 학습 도구입니다.<br />
            다양한 상황 속에서 미션을 수행하고, 프랑스어 실력을 키워보세요!<br /><br />
            2025-1 언어교육캡스톤디자인<br />
            기획 및 개발 : 불어교육과 지현선, 불어교육과 신홍준
          </div>
          <div class="name-input-box">
            <label for="userName">예약자 성함을 입력해주세요.</label><br />
              <div class="name-input-box-group">
                <input type="text" id="userName" placeholder="ex. Hongjun" />
                <button id="start-btn">입력 완료!</button>
              </div>
          </div>
        </div>
      `,

      onMount: setupIntroEvents
    }
};

export function setupIntroEvents() {
  let isKeyHandlerActive = false;

  const popup = document.getElementById("popup");
  const popupHeaderTitle = document.querySelector(".popup-header-title");
  const popupContentText = document.querySelector(".popup-content-text");
  const btn1 = document.getElementById("popup-content-btn1");
  const btn2 = document.getElementById("popup-content-btn2");
  const btn3 = document.getElementById("popup-content-btn3");
  const startBtn = document.getElementById("start-btn");
  const nameInput = document.getElementById("userName");

  const keyHandler = function (e) {
    if (popup.classList.contains("hidden")) return;

    const currentInput = nameInput.value.trim();

    if (!currentInput && (e.key === "Escape" || e.key === "Enter")) {
      closePopup();
    } else if (currentInput) {
      if (e.key === "Escape") {
        btn1.click();
      } else if (e.key === "Enter") {
        btn2.click();
      }
    }
  };

  function closePopup() {
    popup.classList.add("hidden");
    overlay.classList.remove("show");
    
    if (isKeyHandlerActive) {
      window.removeEventListener("keydown", keyHandler);
      isKeyHandlerActive = false;
    }
  }

  function handleStart() {
    if (!popup.classList.contains("hidden")) return;

    const input = nameInput.value.trim();

    if (!input) {
      popupHeaderTitle.textContent = "오류 발생!";
      popupContentText.innerHTML = "이름을 입력해주세요.";

      btn1.textContent = "확인";
      btn2.classList.add('hidden');
      btn3.classList.add('hidden');

      popup.classList.remove('hidden');
      overlay.classList.add('show');

      btn1.onclick = closePopup;

      if (!isKeyHandlerActive) {
        setTimeout(() => {
          window.addEventListener("keydown", keyHandler);
          isKeyHandlerActive = true;
        }, 0);
      }

      return;
    }

    state.userName = input;

    popupHeaderTitle.textContent = "정보 확인";
    popupContentText.innerHTML = `
    <p>아래 이름이 맞습니까?</p>
    <h3>>  ${state.userName}  <</h3>
    `

    btn1.textContent = "아니요";
    btn1.classList.remove('hidden');
    btn2.textContent = "예";
    btn2.classList.remove('hidden');
    btn3.classList.add('hidden');

    popup.classList.remove('hidden');
    overlay.classList.add('show');

    btn1.onclick = closePopup;

    btn2.onclick = () => {
      closePopup();
      renderStatusBar();
      loadScene(getIntro2Scene());
      console.log("loadScene 호출");
    };

    if (!isKeyHandlerActive) {
      setTimeout(() => {
        window.addEventListener("keydown", keyHandler);
        isKeyHandlerActive = true;
      }, 0);
    }
  }

  if (startBtn && nameInput) {
    startBtn.addEventListener("click", handleStart);
    nameInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter" && popup.classList.contains("hidden")) {
        handleStart();
      }
    });
  }
}