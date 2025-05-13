import { state } from "../../script.js";
import { renderQuest } from "../../statusBar.js";
import { getLyon2Scene } from "./lyon2.js";

export function getLyon1ccScene() {

    return {
        id: "lyon1cc",
        background_img: "assets/images/inAirplane.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `예매한 자리에 앉았다.` },
            { speaker: `👤 ${state.userName}`, text: `리옹에 도착할 때까지 눈 좀 붙이자.` },
            { speaker: `📢`, text: `리옹에 도착할 때까지 잠시만 기다려주세요!` },
        ],

        nextScene: () => {
            state.currentQuest = "리옹메인",
            renderQuest();
            return getLyon2Scene();
        }
    }
}