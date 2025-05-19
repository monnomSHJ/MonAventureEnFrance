import { state } from "../../script.js";

export function getEnd2Scene() {

    return {
        id: "end2",
        background_img: "",
        narration: "",
        lines: [
            { speaker: "📢", text: "짜잔. 위 버튼을 클릭해 결과를 확인하고 pdf로 저장하세요!",
                customAction: () => {
                    const contentMain = document.getElementById("content-main");
                    if (contentMain && !document.getElementById("result-button")) {
                        const button = document.createElement("button");
                        button.id = "result-button";
                        button.className = "result-button button";
                        button.textContent = "결과 보기";
                        button.onclick = () => {
                            window.open("result.html", "_blank");
                        };
                        contentMain.appendChild(button);
                    }
                }
            },
            { speaker: "📢", text: "마지막으로, 플레이주셔서 다시 한번 감사드립니다!"},
            { speaker: "📢", text: "다시 시작하려면 새로고침을 눌러주세요."},
        ],

        nextScene: () => {
            console.log('끝!');
        }
    }
}