import { state } from "../../script.js";
import { getBordeaux1abScene } from "./bordeaux1ab.js";

export function getBordeaux1aaScene() {

    return {
        id: "bordeaux1aa",
        background_img: "assets/images/hotelRoomBg.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `아침이 밝았다.` },
            { speaker: `👤 ${state.userName}`, text: `나갈 준비를 마치고 기차를 타러 Paris Gare Montparnasse으로 가자.` },
        ],

        nextScene: () => {
            return getBordeaux1abScene();
        }
    }
}