import { state } from "../../script.js";
import { renderQuest } from "../../statusBar.js";
import { getMarseille2Scene } from "./marseille2.js";

export function getMarseille1ccScene() {

    return {
        id: "marseille1cc",
        background_img: "assets/images/inAirplane.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `예매한 자리에 앉았다.` },
            { speaker: `👤 ${state.userName}`, text: `마르세유에 도착할 때까지 눈 좀 붙이자.` },
            { speaker: `📢`, text: `마르세유에 도착할 때까지 잠시만 기다려주세요!` },
        ],

        nextScene: () => {
            state.currentQuest = "마르세유메인",
            renderQuest();
            return getMarseille2Scene();
        }
    }
}