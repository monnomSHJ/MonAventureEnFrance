import { state } from "../../script.js";
import { getMarseille2Scene } from "./marseille2.js";

export function getMarseille2cScene() {

    return {
        id: "marseille2c",
        background_img: "assets/images/leVieuxPort.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `정말 한 폭의 그림 같다.` },
            { speaker: `👤 ${state.userName}`, text: `여기에 이곳에 관해 설명이 적혀있다.` },
            { speaker: ``, text: `Bienvenue au Vieux-Port de Marseille.`, overlayImg: "assets/images/leVieuxPortOverlay1.png" },
            { speaker: ``, text: `C'est un lieu historique.`, overlayImg: "assets/images/leVieuxPortOverlay1.png" },
            { speaker: ``, text: `Merci de respecter les bateaux et les pêcheurs.`, overlayImg: "assets/images/leVieuxPortOverlay1.png" },
            { speaker: ``, text: `Vous pouvez voir les marchés, les cafés et les bateaux.`, overlayImg: "assets/images/leVieuxPortOverlay1.png" },
            { speaker: `👤 ${state.userName}`, text: `항구의 아름다움을 만끽했다.` },
        ],

        nextScene: () => {
            return getMarseille2Scene()
        }
    }
}