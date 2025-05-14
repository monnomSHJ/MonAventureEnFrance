import { state } from "../../script.js";
import { getLyon2Scene } from "./lyon2.js";

export function getLyon2a2Scene() {

    const artworks = {
        "아이언맨 수트": [
            { speaker: ``, text: "Voici l'armure portée dans le film Iron Man.", overlayImg: "assets/images/ironMan.jpg" },
        ],
        "토르 망치": [
            { speaker: ``, text: "Voici le marteau utilisé dans le film Thor.", overlayImg: "assets/images/thor.jpg" },
        ],
        "스파이더맨 수트": [
            { speaker: ``, text: "Voici l'armure portée dans le film Spider-Man.", overlayImg: "assets/images/spiderMan.jpg" },
        ],
        "007 제임스본드 수트": [
            { speaker: `📢`, text: "가나의 혼인잔치(Les Noces de Cana)는 파올로 베로네세(Paolo Veronese)가 1563년에 그린 대형 르네상스 회화입니다.", overlayImg: "assets/images/nocesDeCana.jpg" },
            { speaker: `📢`, text: "신약성경 요한복음에 나오는 예수가 처음 기적을 행한 ‘물이 포도주로 변한 사건’을 묘사하고 있습니다.", overlayImg: "assets/images/nocesDeCana.jpg" },
            { speaker: `📢`, text: "이탈리아 베네치아풍의 건축과 화려한 색채, 130명이 넘는 인물들이 생동감 있게 표현된 것이 특징입니다.", overlayImg: "assets/images/nocesDeCana.jpg" },
            { speaker: `📢`, text: "원래 베네치아의 수도원에 있던 작품으로, 현재는 루브르 박물관에서 모나리자 맞은편에 전시되어 있습니다.", overlayImg: "assets/images/nocesDeCana.jpg" },
        ]
    };

    return {
        id: "lyon2a2",
        background_img: "assets/images/miniatureBg.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `박물관에 들어오니 박물관에 대한 소개 글이 적혀있다.`, overlayImg: "assets/images/miniatureOverlay1.png" },
            { speaker: `👤 ${state.userName}`, text: `Bienvenue au musée Cinéma et Miniature de Lyon !`, overlayImg: "assets/images/miniatureOverlay1.png" },
            { speaker: `👤 ${state.userName}`, text: `Ce musée n'est pas intéressant que pour les adultes.`, overlayImg: "assets/images/miniatureOverlay1.png" },
            { speaker: `👤 ${state.userName}`, text: `Au musée, on peut voir des vêtements de films, comme des costumes et des armures.`, overlayImg: "assets/images/miniatureOverlay1.png" },
            { speaker: `👤 ${state.userName}`, text: `Découvrez les secrets des effets spéciaux du cinéma et admirez plus de 100 scènes miniatures incroyablement réalistes.`, overlayImg: "assets/images/miniatureOverlay1.png" },
            { speaker: `👤 ${state.userName}`, text: `어떤 작품을 봐볼까?` },
        ],

        nextScene: () => {
            return getLyon2Scene();
        }
    }
}