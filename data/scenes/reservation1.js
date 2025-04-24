import { state } from "../../script.js";

export function getReservation1Scene() {
    return {
        background_img: "",
        overlay_img: "",
        narration: "🏨 목표: 조건에 맞는 숙소를 예약하자!",
        lines: [
            { speaker: "👤 " + state.userName, text: "오랜 시간 꿈꿔왔던 프랑스로의 여행."},
            { speaker: "👤 " + state.userName, text: "처음 떠나는 해외여행인지라 더 떨리는데?"},
            { speaker: "👤 " + state.userName, text: "비행기 표는 예매했으니, 숙소를 예약해보자."}
        ]   
    };
}
