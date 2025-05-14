import { state } from "../../script.js";
import { renderQuest } from "../../statusBar.js";
import { getBordeaux2Scene } from "./bordeaux2.js";

export function getBordeaux1ccScene() {

    return {
        id: "bordeaux1cc",
        background_img: "assets/images/inAirplane.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `예매한 자리에 앉았다.` },
            { speaker: `👤 ${state.userName}`, text: `보르도에 도착할 때까지 눈 좀 붙이자.` },
            { speaker: `📢`, text: `보르도에 도착할 때까지 잠시만 기다려주세요!` },
        ],

        nextScene: () => {
            state.currentQuest = "보르도메인",
            renderQuest();
            return getBordeaux2Scene();
        }
    }
}