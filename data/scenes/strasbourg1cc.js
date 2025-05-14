import { state } from "../../script.js";
import { renderQuest } from "../../statusBar.js";
import { getStrasbourg2Scene } from "./strasbourg2.js";

export function getStrasbourg1ccScene() {

    return {
        id: "strasbourg1cc",
        background_img: "assets/images/inAirplane.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `예매한 자리에 앉았다.` },
            { speaker: `👤 ${state.userName}`, text: `스트라스부르에 도착할 때까지 눈 좀 붙이자.` },
            { speaker: `📢`, text: `스트라스부르에 도착할 때까지 잠시만 기다려주세요!` },
        ],

        nextScene: () => {
            state.currentQuest = "스트라스부르메인",
            renderQuest();
            return getStrasbourg2Scene();
        }
    }
}