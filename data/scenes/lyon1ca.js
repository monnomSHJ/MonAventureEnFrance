import { state } from "../../script.js";
import { getLyon1cbScene } from "./lyon1cb.js";

export function getLyon1caScene() {

    return {
        id: "lyon1ca",
        background_img: "assets/images/hotelRoomBg.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `아침이 밝았다.` },
            { speaker: `👤 ${state.userName}`, text: `나갈 준비를 마치고 비행기를 타러 Paris Charles de Gaulle Airport으로 가자.` },
        ],

        nextScene: () => {
            return getLyon1cbScene();
        }
    }
}