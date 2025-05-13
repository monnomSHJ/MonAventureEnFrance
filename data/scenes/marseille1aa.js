import { state } from "../../script.js";
import { getMarseille1abScene } from "./marseille1ab.js";

export function getMarseille1aaScene() {

    return {
        id: "marseille1aa",
        background_img: "assets/images/hotelRoomBg.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `아침이 밝았다.` },
            { speaker: `👤 ${state.userName}`, text: `나갈 준비를 마치고 기차를 타러 Paris Gare de Lyon으로 가자.` },
        ],

        nextScene: () => {
            return getMarseille1abScene();
        }
    }
}