import { state } from "../../script.js";
import { renderQuest } from "../../statusBar.js";
import { getAirport2Scene } from "./airport2.js";

export function getAirport1Scene() {
    return {
        id: "airport1",
        background_img: "assets/images/airportMain.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: "드디어 도착했다!" },
            { speaker: `👤 ${state.userName}`, text: "사람이 정말 많은 것 같아." },
            { speaker: `👤 ${state.userName}`, text: "이제 택시를 타고 숙소로 가야 하는데..." },
            { speaker: `👤 ${state.userName}`, text: "어디로 가야 하지?" },
            { speaker: `👤 ${state.userName}`, text: "직원 분께 여쭤볼까?" },
            { speaker: `👤 ${state.userName}`, text: "조금 떨리는데..." },
            { speaker: `👤 ${state.userName}`, text: "그래, 나 프랑스어 배운 사람이야!" },
            { speaker: `👤 ${state.userName}`, text: "저기 보이는 직원분께 한번 여쭤보자."},
        ],
        
        nextScene: () => {
            state.currentQuest = "택시 타기";
            renderQuest();
            return getAirport2Scene();
        }
    }
}