import { state } from "../../script.js";

import hotelData from "../hotelData.js";

export function getReservation1Scene() {
    return {
        background_img: "",
        overlay_img: "",
        narration: "🏨 목표: 조건에 맞는 숙소를 예약하자! 사이드바의 퀘스트 박스에서 조건을 확인하세요.",
        lines: [],
        contentHTML: `
            <div class="reservation-header">
                <h2>숙소 예약</h2>
                <p>어쩌구 저쩌구</p>
            </div>
            
            <div class="hotel-card-container">
                ${hotelData.map(hotel => `
                    <div class="hotel-card" data-id="${hotel.id}">
                        <img src="${hotel.image}" alt="${hotel.name}" />
                        <h3>${hotel.name}</h3>
                        <p>${hotel.summary}</p>
                        <button class="view-details" data-id="${hotel.id}">자세히 보기</button>
                    </div>
                `).join("")}
            </div>

            <div class="reservation-actions">
                <button id="confirm-reservation" disabled>예약 완료</button>
            </div>

            <div id="hotel-modal" class="modal hidden">
                <div class="modal-content">
                <span id="close-modal" class="close-button">&times;</span>
                    <h2 id="modal-title">호텔 이름</h2>
                    <div id="modal-description">상세 설명</div>
                <button id="cancel-selection">다른 숙소 보기</button>
                <button id="ok-selection">이 숙소로 선택하기</button>
                </div>
            </div>
        `,
        onMount: setupReservationUI,
    }
}

function setupReservationUI() {
    let selectedHotel = null;

    const modal = document.getElementById("hotel-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const closeModalBtn = document.getElementById("close-modal");
    const confirmBtn = document.getElementById("confirm-reservation");
    const cancelBtn = document.getElementById("cancel-selection");
    const okSelectBtn = document.getElementById("ok-selection");


    // [1] 자세히 보기 버튼 클릭 시 모달 표시
    document.querySelectorAll(".view-details").forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.dataset.id;
            const hotel = hotelData.find(h => h.id === id);

            if (!hotel) {
                console.warn("해당 숙소 정보를 찾을 수 없습니다!", id);
                return;
            }

            modal.dataset.selectedId = id;
            modalTitle.textContent = hotel.name;

            modalDescription.innerHTML = hotel.descriptionLines
                .map(line => `<p>${line}</p>`)
                .join("");

            modal.classList.add("show");
        });
    });    

    // [2] 모달 닫기 버튼
    closeModalBtn.addEventListener("click", () => {
        modal.classList.remove("show");
    });

    // [3] 숙소 선택 버튼 클릭 시
    okSelectBtn.addEventListener("click", () => {
        selectedHotel = modal.dataset.selectedId;
        highlightSelectedCard(selectedHotel);
        confirmBtn.disabled = false;
        modal.classList.remove("show");
     });

    // [4] 다른 숙소 보기
    cancelBtn.addEventListener("click", () => {
        selectedHotel = null;
        modal.classList.remove("show");
      });

    // [5] 예약 완료 버튼
    confirmBtn.addEventListener("click", () => {
        if (!selectedHotel) return;

        alert(`${selectedHotel} 예약 완료!`);
        // 다음 Scene 전환 로직 추가 예정
    });

    function highlightSelectedCard(id) {
        document.querySelectorAll(".hotel-card").forEach(card => {
            card.classList.toggle("selected", card.dataset.id === id);
        });
    }
}