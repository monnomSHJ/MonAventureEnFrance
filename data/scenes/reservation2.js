import { state, renderQuest } from "../../script.js";

export function getReservation2Scene() {
    return {
        id: "getReservation2",
        background_img: "assets/images/airplane-window.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: "오랜 시간 꿈꿔왔던 프랑스로의 여행." },
            { speaker: `👤 ${state.userName}`, text: "처음 떠나는 해외여행인지라 더 떨리는데?" },
            { speaker: `👤 ${state.userName}`, text: "... 그래도 열심히 프랑스어 공부했으니까." },
            { speaker: `👤 ${state.userName}`, text: "별 문제 없겠지?" },
            { speaker: `📢`, text: "과연..." },
            { speaker: `👤 ${state.userName}`, text: "아 뭐야 누구세요?" },
            { speaker: `📢`, text: "..." },
            { speaker: `👤 ${state.userName}`, text: "잘못 들었나?" },
            { speaker: `👤 ${state.userName}`, text: "... 프랑스에 도착하려면 한참 남았으니 잠이나 좀 자야겠다."},
            { speaker: `👤 ${state.userName}`, text: "쿨쿨. 드르렁. 커허헉." },
            { speaker: `📢`, text: "여기서 깜짝 토막 상식!", overlayImg: "assets/images/airplane-window.jpg" },
        ],
        
        nextScene: () => {
            state.currentQuest = "택시 타기기";
            renderQuest();
        }
    }
}