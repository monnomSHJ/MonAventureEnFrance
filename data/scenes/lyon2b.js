import { state } from "../../script.js";
import { getLyon2Scene } from "./lyon2.js";

export function getLyon2bScene() {

    return {
        id: "lyon2b",
        background_img: "assets/images/fourviereLyon.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `우와... 정말 거대하고 웅장하다.` },
            { speaker: `👤 ${state.userName}`, text: `여기에 이곳에 관해 설명이 적혀있다.` },
            { speaker: ``, text: `Bienvenue à la basilique de Fourvière.`, overlayImg: "assets/images/fourviereOverlay1.png" },
            { speaker: ``, text: `Elle offre une vue magnifique sur la ville de Lyon.`, overlayImg: "assets/images/fourviereOverlay1.png" },
            { speaker: ``, text: `alors ne manquez surtout pas la vue depuis la colline de Fourvière.`, overlayImg: "assets/images/fourviereOverlay1.png" },
            { speaker: ``, text: `L'entrée est gratuite pour tous les visiteurs.`, overlayImg: "assets/images/fourviereOverlay1.png" },
            { speaker: ``, text: `Les animaux ne sont pas autorisés dans la cathédrale, et fumer non plus.`, overlayImg: "assets/images/fourviereOverlay1.png" },
            { speaker: ``, text: `Merci de garder le silence pendant la visite.`, overlayImg: "assets/images/fourviereOverlay1.png" },
            { speaker: `👤 ${state.userName}`, text: `푸르비에르 대성당의 멋진 모습을 눈에 잔뜩 담았다.` },
        ],

        nextScene: () => {
            return getLyon2Scene()
        }
    }
}