import { state } from "../../script.js";
import { getMarseille1cbScene } from "./marseille1cb.js";

export function getMarseille1caScene() {

    return {
        id: "marseille1ca",
        background_img: "assets/images/hotelRoomBg.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `아침이 밝았다.` },
            { speaker: `👤 ${state.userName}`, text: `나갈 준비를 마치고 비행기를 타러 Paris Charles de Gaulle Airport로 가자.` },
        ],

        nextScene: () => {
            return getMarseille1cbScene();
        }
    }
}