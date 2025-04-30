import { state, renderStatusBar, loadScene, overlay } from "../../script.js";
import { getIntro2Scene } from "./intro2.js";

export function renderIntro() {
    return `
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
    `;
};

// 인트로 화면이 렌더링된 후 호출해야 하는 초기화 함수
export function setupIntroEvents() {

  const popup = document.getElementById("popup");
  const popupHeaderTitle = document.querySelector(".popup-header-title");
  const popupContentText = document.querySelector(".popup-content-text");
  const btn1 = document.getElementById("popup-content-btn1");
  const btn2 = document.getElementById("popup-content-btn2");
  const btn3 = document.getElementById("popup-content-btn3");

  setTimeout(() => {
    const startBtn = document.getElementById("start-btn");
    if (startBtn) {
      startBtn.addEventListener("click", () => {
        const input = document.getElementById("userName").value.trim();

        if (!input) {
          popupHeaderTitle.textContent = "오류 발생!";
          popupContentText.innerHTML = "이름을 입력해주세요.";

          btn1.textContent = "확인";
          btn2.classList.add('hidden');
          btn3.classList.add('hidden');

          popup.classList.remove('hidden');
          overlay.classList.toggle('show');

          btn1.onclick = () => {
            popup.classList.add("hidden");
            overlay.classList.remove("show"); 
          };
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
        btn3.classList.add('hidden');

        popup.classList.remove('hidden');
        overlay.classList.toggle('show');

        btn1.onclick = () => {
          popup.classList.add("hidden");
          overlay.classList.remove("show");
        };

        btn2.onclick = () => {
          popup.classList.add("hidden");
          overlay.classList.remove("show");
          renderStatusBar();

          document.getElementById("content-main").innerHTML = `
          <div id="bg-container" class="bg-container hidden"></div>
          <div id="narration-box" class="text-box narration hidden"></div>
          <div id="dialogue-box" class="text-box dialogue hidden">
            <div class="dialogue-container">
              <div id="dialogue-text"></div>
              <div id="next-btn" class="next-btn">▶</div>
            </div>
          </div>

          <div id="overlay-image" class="overlay-image hidden"></div>

          <div id="popup" class="popup hidden">
            <div id="popup-header" class="popup-header">
              <div class="popup-header-title"></div>
              <div class="popup-header-close-btn"></div>
            </div>
            <div id="popup-content" class="popup-content">
              <div class="popup-content-text"></div>
              <div class="popup-content-btn-group">
                <div id="popup-content-btn1" class="popup-content-btn></div>
                <div id="popup-content-btn2" class="popup-content-btn hidden"></div>
                <div id="popup-content-btn3" class="popup-content-btn hidden"></div>
              </div>
            </div>
          </div>
        `;
        
        loadScene(getIntro2Scene());
        console.log("loadScene 호출");
        }
      });
    }
  }, 0);
}