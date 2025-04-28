import { state, renderQuest } from "../../script.js";


export function getIntro2Scene() {
    return {
        background_img: "../../assets/images/airplane_window.jpg",
        lines: [
            { speaker: `👤 ${state.userName}`, text: "오랜 시간 꿈꿔왔던 프랑스로의 여행." },
            { speaker: `👤 ${state.userName}`, text: "처음 떠나는 해외여행인지라 더 떨리는데?" },
            { speaker: `👤 ${state.userName}`, text: "비행기 표는 예매했으니, 숙소를 예약해보자." }
        ],
        
        nextScene: () => {
            state.currentQuest = "숙소 선택";
            renderQuest();
            return {
                background_img: "assets/images/hotel_lobby.jpg",
                lines: [
                    { speaker: `👤 ${state.userName}`, text: "이제 숙소를 예약해야지!" }
                ],
                nextScene: null
            };
        }
    }
};