import { state } from "../../script.js";
import { getStrasbourg2Scene } from "./strasbourg2.js";

export function getStrasbourg2cScene() {

    return {
        id: "strasbourg2c",
        background_img: "assets/images/laPetiteFrance.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `우와... 정말 아름답다.` },
            { speaker: `👤 ${state.userName}`, text: `여기에 이곳에 관해 설명이 적혀있다.` },
            { speaker: ``, text: `Bienvenue dans le quartier de la Petite France.`, overlayImg: "assets/images/laPetiteFranceOverlay1.png" },
            { speaker: ``, text: `Ce quartier est célèbre pour ses maisons à colombages et ses canaux.`, overlayImg: "assets/images/laPetiteFranceOverlay1.png" },
            { speaker: ``, text: `L'entrée est gratuite.`, overlayImg: "assets/images/laPetiteFranceOverlay1.png" },
            { speaker: `👤 ${state.userName}`, text: `만화 속 한 장면 같은 풍경을 눈에 잔뜩 담았다.` },
        ],

        nextScene: () => {
            return getStrasbourg2Scene()
        }
    }
}