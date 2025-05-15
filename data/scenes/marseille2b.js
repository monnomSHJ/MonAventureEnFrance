import { state } from "../../script.js";
import { getMarseille2Scene } from "./marseille2.js";

export function getMarseille2bScene() {

    return {
        id: "marseille2b",
        background_img: "assets/images/notreDameDeLaGarde.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `우와... 정말 거대하고 웅장하다.` },
            { speaker: `👤 ${state.userName}`, text: `여기에 이곳에 관해 설명이 적혀있다.` },
            { speaker: ``, text: `Bienvenue à la basilique Notre-dame de la Garde.`, overlayImg: "assets/images/deLaGardeOverlay1.png" },
            { speaker: ``, text: `Vous pouvez voir une belle vue sur la ville de Marseille.`, overlayImg: "assets/images/deLaGardeOverlay1.png" },
            { speaker: ``, text: `L'entrée est gratuite pour tous les visiteurs.`, overlayImg: "assets/images/deLaGardeOverlay1.png" },
            { speaker: ``, text: `Merci de garder le silence pendant la visite.`, overlayImg: "assets/images/deLaGardeOverlay1.png" },
            { speaker: `👤 ${state.userName}`, text: `노트르담 드 라 가르드 대성당의 멋진 모습을 눈에 잔뜩 담았다.` },
        ],

        nextScene: () => {
            return getMarseille2Scene()
        }
    }
}