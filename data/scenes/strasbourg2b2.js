import { state } from "../../script.js";
import { getStrasbourg2Scene } from "./strasbourg2.js";

export function getStrasbourg2b2Scene() {

    return {
        id: "strasbourg2b2",
        background_img: "assets/images/notreDameDeStrasbourg.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `우와... 정말 거대하고 웅장하다.` },
            { speaker: `👤 ${state.userName}`, text: `여기에 이곳에 관해 설명이 적혀있다.` },
            { speaker: ``, text: `Bienvenue à la cathédrale de Strasbourg.`, overlayImg: "assets/images/notreDameDeStrasbourgOverlay1.png" },
            { speaker: ``, text: `Elle a été construite entre 1176 et 1439.`, overlayImg: "assets/images/notreDameDeStrasbourgOverlay1.png" },
            { speaker: ``, text: `C'est un exemple de l'architecture gothique.`, overlayImg: "assets/images/notreDameDeStrasbourgOverlay1.png" },
            { speaker: ``, text: `Merci de garder le silence à l'intérieur.`, overlayImg: "assets/images/notreDameDeStrasbourgOverlay1.png" },
            { speaker: `👤 ${state.userName}`, text: `노트르담 드 스트라스부르 대성당의 멋진 모습을 눈에 잔뜩 담았다.` },
        ],

        nextScene: () => {
            return getStrasbourg2Scene()
        }
    }
}