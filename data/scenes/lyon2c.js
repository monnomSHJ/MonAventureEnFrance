import { state } from "../../script.js";
import { getLyon2Scene } from "./lyon2.js";

export function getLyon2cScene() {

    return {
        id: "lyon2c",
        background_img: "assets/images/parcDeLaTeteDor.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `정말 넓고 푸르른 곳이다.` },
            { speaker: `👤 ${state.userName}`, text: `여기에 이곳에 관해 설명이 적혀있다.` },
            { speaker: ``, text: `Bienvenue au parc de la Tête d'Or.`, overlayImg: "assets/images/parcTeteDorOverlay1.jpg" },
            { speaker: ``, text: `Le parc est ouvert tous les jours de 6h30 à 22h30.`, overlayImg: "assets/images/parcTeteDorOverlay1.jpg" },
            { speaker: ``, text: `Merci de respecter la nature et les animaux.`, overlayImg: "assets/images/parcTeteDorOverlay1.jpg" },
            { speaker: ``, text: `L'entrée est gratuite.`, overlayImg: "assets/images/parcTeteDorOverlay1.jpg" },
            { speaker: `👤 ${state.userName}`, text: `자연에서의 즐거움을 만끽했다.` },
        ],

        nextScene: () => {
            return getLyon2Scene()
        }
    }
}