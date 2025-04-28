import { state, overlay } from "../../script.js";
import hotelData from "../hotelData.js";

export function getReservation1Scene() {
    return {
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
    let selectedHotel = null;

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

            selectedHotel = id;
            confirmBtn.disabled = false;

            popupHeaderTitle.textContent = hotel.name;
            popupContentText.innerHTML = hotel.descriptionLines.map(line => `<p>${line}</p>`).join("");

            btn1.textContent = "이 숙소로 선택하기";
            btn2.textContent = "다른 숙소 보기";
            btn3.classList.add('hidden');
            overlay.classList.toggle("show");

            btn1.onclick = () => {
                highlightSelectedCard(selectedHotel);
                popup.classList.add("hidden");
                overlay.classList.remove("show");
                document.getElementById("${hotel.id}").style.borderColor = '#F19B0F';
            };

            btn2.onclick = () => {
                popup.classList.add("hidden");
                overlay.classList.remove("show");
            };

            popup.classList.remove("hidden");
        });
    });

    confirmBtn.addEventListener("click", () => {
        if (!selectedHotel) return;

        let deductedAmount = 0;
        let addedScore = 0;
        let hotelName = "";

        if (selectedHotel === "hotel1") {
            deductedAmount = 95;
            addedScore = 10;
            hotelName = "Hôtel Soleil";
        } else if (selectedHotel === "hotel2") {
            deductedAmount = 85;
            addedScore = 5;
            hotelName = "Maison de Paris";
        } else if (selectedHotel === "hotel3") {
            deductedAmount = 105;
            addedScore = 7;
            hotelName = "Le Petit Palais";
        }

        state.balance -= deductedAmount;
        state.score += addedScore;
        renderStatusBar();

        popupHeaderTitle.textContent = "✅ 예약 완료!";
        popupContentText.innerHTML = `
            🏨 ${hotelName} 예약 완료!<br>
            💶 ${deductedAmount}유로 차감<br>
            🌟 ${addedScore}점 획득
        `;

        btn1.textContent = "다음으로";
        btn2.classList.add('hidden');
        btn3.classList.add('hidden');

        btn1.onclick = () => {
            console.log("비행기 타러 가자!"); 
            // TODO: 다음 씬으로 이동하는 코드 추가
        };

        popup.classList.remove("hidden");
    });

    function highlightSelectedCard(id) {
        document.querySelectorAll(".hotel-card").forEach(card => {
            card.classList.toggle("selected", card.dataset.id === id);
        });
    }
}