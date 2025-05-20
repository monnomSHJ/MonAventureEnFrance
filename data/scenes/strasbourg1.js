import { state } from "../../script.js";
import { overlay, loadScene } from "../../sceneManager.js";
import { renderQuest, renderStatusBar } from "../../statusBar.js";
import { strasbourgTransportData } from "../transportData.js";
import { getStrasbourg1aScene } from "./strasbourg1a.js"; // 기차 선택 시
import { getStrasbourg1bScene } from "./strasbourg1b.js"; // 버스 선택 시
import { getStrasbourg1cScene } from "./strasbourg1c.js"; // 비행기 선택 시

export function getStrasbourg1Scene() {

    return {
        id: "strasbourg1",
        background_img: "",
        narration: "",
        lines: [],
        contentHTML: `
            <div class="transport-content-wrap">
                <div class="transport-card-container">
                    ${strasbourgTransportData.map(transport => `
                        <div class="transport-card" data-id="${transport.id}">
                            <div class="transport-card-content">
                                <div class="transport-card-title">${transport.name}</div>
                                <hr>
                                ${transport.descriptionLines.map(line => `
                                    <div class="transport-card-discription">${line}</div>
                                    `).join("")}
                                <hr>
                                <div class="transport-card-plus">${transport.plus}</div>
                            </div>
                            <button class="transport-card-select button" data-id="${transport.id}">선택하기</button>
                        </div>
                    `).join("")}
                </div>

                <div class="transport-confirm-wrap">
                    <button id="confirm-transport" class="confirm-transport button" disabled>예약 완료</button>
                </div>
            </div>
        `,
        onMount: setupReservationUI
    }
}

function setupReservationUI() {
    let selectedTransportID = null;

    const popup = document.getElementById("popup");
    const popupHeaderTitle = document.querySelector(".popup-header-title");
    const popupContentText = document.querySelector(".popup-content-text");
    const btn1 = document.getElementById("popup-content-btn1");
    const btn2 = document.getElementById("popup-content-btn2");
    const btn3 = document.getElementById("popup-content-btn3");
    const confirmBtn = document.getElementById("confirm-transport");

    document.querySelectorAll(".transport-card-select").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.dataset.id;
            const transport = strasbourgTransportData.find(h => h.id === id);

            if (!transport) {
                console.warn("해당 교통편을 찾을 수 없습니다.", id);
                return;
            }

            selectedTransportID = id;
            highlightSelectedCard(selectedTransportID);
            confirmBtn.disabled = false;
            return;
        })
    })

    confirmBtn.addEventListener("click", () => {
        if(!selectedTransportID) {
            return;
        }

        const transport = strasbourgTransportData.find(h => h.id === selectedTransportID);
        
        const deductedAmount = transport.price || 0;
        const addedScore = transport.score || 0;

        popupHeaderTitle.textContent = "💡 예약 확인";
        popupContentText.innerHTML = `
            <h3>${transport.name}</h3>
            ${transport.descriptionLines.map(line => `<p>${line}</p>`).join("")}
        `

        btn1.classList.remove('hidden');
        btn1.textContent = "뒤로 가기";
        btn2.classList.remove('hidden');
        btn2.textContent = "교통편 확정하기";
        btn3.classList.add('hidden');

        popup.classList.remove("hidden");
        overlay.classList.add("show");

        btn1.onclick = () => {
            popup.classList.add("hidden");
            overlay.classList.remove("show");
            return;
        }

        btn2.onclick = () => {
            state.balance -= deductedAmount;
            state.score += addedScore;

            state.selectedTransport = selectedTransportID;

            if (typeof renderStatusBar === 'function') {
                renderStatusBar();
            }

            popupHeaderTitle.textContent = "✅ 예약 완료";
            popupContentText.innerHTML = `
                <h3>🎉 성공적으로 교통편 예매를 완료하였습니다.</h3>
                <p>아래에서 예약 정보를 확인해주세요</p>
                <hr>
                <p>🎫 예약한 교통수단: ${transport.what}</p>
                <p>👤 예약자명: ${state.name}</p>
                <hr>
                ${transport.descriptionLines.map(line => `<div class="transport-card-discription">${line}</div>`).join("")}
                <hr>
                <p>💸 ${deductedAmount} 유로가 차감되었습니다.</p>
                <p>🌟 ${addedScore} 점을 획득했습니다.</p>
                `

            btn1. textContent = "다음으로";
            btn2.classList.add('hidden');
            btn3.classList.add('hidden');

            btn1.onclick = () => {
                popup.classList.add("hidden");
                overlay.classList.remove("show");
                state.currentQuest = "";
                renderQuest();
                if (selectedTransportID == "train") {
                    loadScene(getStrasbourg1aScene());
                } else if (selectedTransportID == "bus") {
                    loadScene(getStrasbourg1bScene());
                } else if (selectedTransportID == "airport") {
                    loadScene(getStrasbourg1cScene());
                }
            }

            popup.classList.remove("hidden");
            overlay.classList.toggle("show");
            return;
        }
    })

    function highlightSelectedCard(idToHighlight) {
        document.querySelectorAll(".transport-card").forEach(card => {
            card.classList.remove("selected");
            if (card.dataset.id === idToHighlight) {
                card.classList.add("selected");
            }
        });
    }
}