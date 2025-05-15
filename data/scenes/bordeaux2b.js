import { state } from "../../script.js";
import { getBordeaux2Scene } from "./bordeaux2.js";

export function getBordeaux2bScene() {

    return {
        id: "bordeaux2b",
        background_img: "assets/images/placeDeLaBourse.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `되게 독특한 분위기의 넓은 광장이다.` },
            { speaker: `👤 ${state.userName}`, text: `여기에 이곳에 관해 설명이 적혀있다.` },
            { speaker: ``, text: `Bienvenue à la Place de la Bourse.`, overlayImg: "assets/images/placeDeLaBourseOverlay1.png" },
            { speaker: ``, text: `C'est un symbole de Bordeaux depuis le XVIIIᵉ siècle.`, overlayImg: "assets/images/placeDeLaBourseOverlay1.png" },
            { speaker: ``, text: `Devant la place, vous voyez le Miroir d'eau.`, overlayImg: "assets/images/placeDeLaBourseOverlay1.png" },
            { speaker: ``, text: `Les photos sont autorisées.`, overlayImg: "assets/images/placeDeLaBourseOverlay1.png" },
            { speaker: `👤 ${state.userName}`, text: `한 폭의 그림과 같은 광장의 분위기를 만끽했다.` },
        ],

        nextScene: () => {
            return getBordeaux2Scene()
        }
    }
}