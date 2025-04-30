import { state, overlay, renderStatusBar } from "../../script.js";
import hotelData from "../hotelData.js";

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

            btn1.textContent = "숙소 선택하기";
            btn2.textContent = "다른 숙소 보기";
            btn3.classList.add('hidden');

            popup.classList.remove("hidden");
            overlay.classList.toggle("show");

            btn1.onclick = () => {
                selectedHotelID = id;
                highlightSelectedCard(selectedHotelID);
                confirmBtn.disabled = false;
                popup.classList.add("hidden");
                overlay.classList.remove("show");
                return;
            };

            btn2.onclick = () => {
                popup.classList.add("hidden");
                overlay.classList.remove("show");
                return;
            };
        });
    });

    confirmBtn.addEventListener("click", () => {
        if (!selectedHotelID) {
            popupHeaderTitle.textContent = "오류 발생";
            popupContentText.innerHTML = `<p>⚠️ 숙소를 선택해주세요.</p>`;

            btn1.textContent = "닫기";
            btn2.classList.add('hidden');
            btn3.classList.add('hidden');

            popup.classList.remonve('hidden');
            overlay.classList.toggle("show");

            btn1.onClick = () => {
                popup.classList.remove("hidden");
                overlay.classList.toggle("show");
            }
            return;
        };



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
        popupContentText.innerHTML = `
            <p>${hotelName} 예약이 완료되었습니다.</p>
            <p>💸 ${deductedAmount} 유로가 차감되었습니다.</p>
            <p>🌟 ${addedScore} 점을 획득했습니다.</p>
        `;

        btn1.textContent = "다음으로";
        btn2.classList.add('hidden');
        btn3.classList.add('hidden');

        btn1.onclick = () => {
            popup.classList.add("hidden");
            overlay.classList.remove("show");
        }

        popup.classList.remove("hidden");
        overlay.classList.toggle("show");

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