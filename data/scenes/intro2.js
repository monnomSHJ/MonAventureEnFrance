import { state, renderQuestBox } from "../../script.js";
import { getReservation1Scene } from "./reservation1.js";

export function getIntro2Scene() {
    return {
        background_img: "assets/images/airplane_window.jpg",
        overlay_img: "",
        narration: "✈️ Bienvenue ! Mon Aventure en France에 오신 것을 환영합니다.",
        lines: [
            { speaker: "👤 " + state.userName, text: "오랜 시간 꿈꿔왔던 프랑스로의 여행."},
            { speaker: "👤 " + state.userName, text: "처음 떠나는 해외여행인지라 더 떨리는데?"},
            { speaker: "👤 " + state.userName, text: "비행기 표는 예매했으니, 숙소를 예약해보자."}
        ],
        nextScene: () => {
            state.currentQuest = "숙소 선택";
            return getReservation1Scene();
        }
    };
}
