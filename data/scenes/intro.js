import { state, loadScene, renderStatusBox, currentScene } from "../../script.js";
import { getIntro2Scene } from "./intro2.js";

export function renderIntro() {
    const html = `
        <h1 class="main-title">✈️ Mon Aventure en France</h1>
        <div class="description">
            이 게임은 프랑스 여행을 통해 언어와 문화를 체험할 수 있는 인터랙티브 학습 도구입니다.<br />
            다양한 상황 속에서 미션을 수행하고, 프랑스어 실력을 키워보세요!<br /><br />
            2025-1 언어교육캡스톤디자인<br />
            기획 및 개발 : 불어교육과 지현선, 불어교육과 신홍준
        </div>
    
        <div class="input-box">
            <label for="userName">예약자 성함을 입력해주세요.</label><br />
            <input type="text" id="userName" placeholder="ex. Hongjun" />
            <button id="start-btn">입력 완료!</button>
        </div>
    `;

    setTimeout(() => {
        const btn = document.getElementById("start-btn");
        if (btn) {
            btn.addEventListener("click", () => {
                const input = document.getElementById("userName").value.trim();
                if (!input) return alert("이름을 입력해주세요!");

                state.userName = input;
                document.getElementById("intro-contents").classList.add("hidden");

                renderStatusBox();
                loadScene(getIntro2Scene());
                console.log("씬 로딩됨:", currentScene);
            });
        }
    }, 0);

    return html;
}