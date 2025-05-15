import { state } from "../../script.js";
import { getBordeaux2Scene } from "./bordeaux2.js";

export function getBordeaux2aScene() {

    return {
        id: "bordeaux2a",
        background_img: "assets/images/saintAndre.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `정말 거대하고 웅장하다...` },
            { speaker: `👤 ${state.userName}`, text: `여기에 이곳에 관해 설명이 적혀있다.` },
            { speaker: ``, text: `Bienvenue à la cathédrale Saint-André de Bordeaux.`, overlayImg: "assets/images/saintAndreOverlay1.png" },
            { speaker: ``, text: `L'entrée est gratuite.`, overlayImg: "assets/images/saintAndreOverlay1.png" },
            { speaker: ``, text: `Elle a été construite entre le XIIᵉ et le XIVᵉ siècle.`, overlayImg: "assets/images/saintAndreOverlay1.png" },
            { speaker: ``, text: `Merci de garder le silence pendant la visite.`, overlayImg: "assets/images/saintAndreOverlay1.png" },
            { speaker: `👤 ${state.userName}`, text: `생 앙드레 대성당의 웅장함을 한껏 눈에 담았다.` },
        ],

        nextScene: () => {
            return getBordeaux2Scene()
        }
    }
}