import { state } from "../../script.js";
import { getStrasbourg2Scene } from "./strasbourg2.js";

export function getStrasbourg2aScene() {

    return {
        id: "strasbourg2a",
        background_img: "assets/images/placeKleber.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `정말 한 폭의 그림 같다.` },
            { speaker: `👤 ${state.userName}`, text: `여기에 이곳에 관해 설명이 적혀있다.` },
            { speaker: ``, text: `Bienvenue à la Place Kléber.`, overlayImg: "assets/images/kleberOverlay1.png" },
            { speaker: ``, text: `Elle porte le nom de Jean-Baptiste Kléber, un général français.`, overlayImg: "assets/images/kleberOverlay1.png" },
            { speaker: ``, text: `Des événements ont lieu ici toute l'année.`, overlayImg: "assets/images/kleberOverlay1.png" },
            { speaker: ``, text: `Merci de respecter les lieux publics.`, overlayImg: "assets/images/kleberOverlay1.png" },
            { speaker: `👤 ${state.userName}`, text: `광장의 활기찬 분위기를 한껏 즐겨보았다.` },
        ],

        nextScene: () => {
            return getStrasbourg2Scene()
        }
    }
}