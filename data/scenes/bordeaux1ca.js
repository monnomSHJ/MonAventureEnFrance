import { state } from "../../script.js";
import { getBordeaux1cbScene } from "./bordeaux1cb.js";

export function getBordeaux1caScene() {

    return {
        id: "bordeaux1ca",
        background_img: "assets/images/hotelRoomBg.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `아침이 밝았다.` },
            { speaker: `👤 ${state.userName}`, text: `나갈 준비를 마치고 비행기를 타러 Paris Charles de Gaulle Airport으로 가자.` },
        ],

        nextScene: () => {
            return getBordeaux1cbScene();
        }
    }
}