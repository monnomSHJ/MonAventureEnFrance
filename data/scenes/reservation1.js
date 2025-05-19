import { state } from "../../script.js";
import { overlay, loadScene } from "../../sceneManager.js";
import { renderQuest, renderStatusBar } from "../../statusBar.js";
import hotelData from "../hotelData.js";
import { getReservation2Scene } from './reservation2.js';

export function getReservation1Scene() {
    return {
        id: "reservation1",
        background_img: "",
        narration: "",
        lines: [],
        contentHTML: `
            <div class="hotel-content-wrap">
                <div class="hotel-card-container">
                    ${hotelData.map(hotel => `
                        <div class="hotel-card" data-id="${hotel.id}">
                            <img src="${hotel.image}" alt="${hotel.name}" />
                            <div class="hotel-card-content">
                                <div class="hotel-card-texts">
                                    <h3>${hotel.name}</h3>
                                    <p>${hotel.summary}</p>
                                </div>
                                <button class="view-details button" data-id="${hotel.id}">자세히 보기</button>
                            </div>
                        </div>
                    `).join("")}
                </div>

                <div class="reservation-actions">
                <button id="confirm-reservation" class="confirm-reservation button" disabled>예약 완료</button>
                </div>
            </div>
        `,
        onMount: setupReservationUI,
    }
}

function setupReservationUI() {
    let selectedHotelID = null;

    const popup = document.getElementById("popup");
    const popupHeaderTitle = document.querySelector(".popup-header-title");
    const popupContentText = document.querySelector(".popup-content-text");
    const btn1 = document.getElementById("popup-content-btn1");
    const btn2 = document.getElementById("popup-content-btn2");
    const btn3 = document.getElementById("popup-content-btn3");
    const confirmBtn = document.getElementById("confirm-reservation");

    document.querySelectorAll(".view-details").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.dataset.id;
            const hotel = hotelData.find(h => h.id === id);

            if (!hotel) {
                console.warn("해당 호텔을 찾을 수 없습니다!", id);
                return;
            }

            popupHeaderTitle.textContent = hotel.name;
            popupContentText.innerHTML = hotel.descriptionLines.map(line => `<p>${line}</p>`).join("");

            btn1.textContent = "다른 숙소 보기";
            btn2.textContent = "숙소 선택하기";
            btn3.classList.add('hidden');

            popup.classList.remove("hidden");
            overlay.classList.add("show");

            btn2.onclick = () => {
                selectedHotelID = id;
                highlightSelectedCard(selectedHotelID);
                confirmBtn.disabled = false;
                popup.classList.add("hidden");
                overlay.classList.remove("show");
                return;
            };

            btn1.onclick = () => {
                popup.classList.add("hidden");
                overlay.classList.remove("show");
                return;
            };
        });
    });

    confirmBtn.addEventListener("click", () => {
        if (!selectedHotelID) {
            return;
        }

        const hotel = hotelData.find(h => h.id === selectedHotelID);

        const deductedAmount = hotel.price || 0;
        const addedScore = hotel.score || 0;
        const hotelName = hotel.name;

        state.balance -= deductedAmount;
        state.score += addedScore;
        if (typeof renderStatusBar === 'function') {
            renderStatusBar();
        }

        popupHeaderTitle.textContent = "✅ 예약 완료";

        const distanceInfo = hotel.distance;
        const priceInfo = hotel.price;
        const breakfastInfo = hotel.breakfast;

        const isDistanceOk = distanceInfo.includes("30 minutes") || distanceInfo.includes("25 minutes");
        const isPriceOk = hotel.price <= 100;
        const isBreakfastNotOk = breakfastInfo.includes("non");

        state.selectedHotelName = hotelName;
        state.selectedHotelId = hotel.id;

        popupContentText.innerHTML = `
            <p>${hotelName} 예약이 완료되었습니다.</p>
            <p>💸 ${deductedAmount} 유로가 차감되었습니다.</p>
            <p>🌟 ${addedScore} 점을 획득했습니다.</p>
            <hr>
            <h3>조건 만족 여부</h3>
            <p>🏨 거리: ${distanceInfo} → ${isDistanceOk ? "✅ 만족" : "❌ 불만족"}</p>
            <p>💶 가격: ${priceInfo} → ${isPriceOk ? "✅ 만족" : "❌ 불만족"}</p>
            <p>🥐 조식: ${breakfastInfo} → ${isBreakfastNotOk ? "❌ 미포함" : "✅ 포함"}</p>
        `;

        btn1.textContent = "다음으로";
        btn2.classList.add('hidden');
        btn3.classList.add('hidden');

        btn1.onclick = () => {
            popup.classList.add("hidden");
            overlay.classList.remove("show");
            state.currentQuest = "";
            renderQuest();
            loadScene(getReservation2Scene());
        }

        popup.classList.remove("hidden");
        overlay.classList.add("show");

        return;
    });

    function highlightSelectedCard(idToHighlight) {
        document.querySelectorAll(".hotel-card").forEach(card => {
            card.classList.remove("selected");
            if (card.dataset.id === idToHighlight) {
                card.classList.add("selected");
            }
        });
    }
}