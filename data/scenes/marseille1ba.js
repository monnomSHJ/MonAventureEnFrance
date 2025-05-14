import { state } from "../../script.js";
import { getMarseille1bbScene } from "./marseille1bb.js";

export function getMarseille1baScene() {

    return {
        id: "marseille1ba",
        background_img: "assets/images/hotelRoomBg.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `아침이 밝았다.` },
            { speaker: `👤 ${state.userName}`, text: `나갈 준비를 마치고 버스를 타러 Paris Bercy-Seine Bus Station으로 가자.` },
        ],

        nextScene: () => {
            return getMarseille1bbScene();
        }
    }
}