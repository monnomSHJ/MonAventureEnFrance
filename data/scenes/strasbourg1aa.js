import { state } from "../../script.js";
import { getStrasbourg1abScene } from "./strasbourg1ab.js";

export function getStrasbourg1aaScene() {

    return {
        id: "strasbourg1aa",
        background_img: "assets/images/hotelRoomBg.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `아침이 밝았다.` },
            { speaker: `👤 ${state.userName}`, text: `나갈 준비를 마치고 기차를 타러 Paris Gare de l'Est으로 가자.` },
        ],

        nextScene: () => {
            return getStrasbourg1abScene();
        }
    }
}