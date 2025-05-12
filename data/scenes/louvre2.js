import { state } from "../../script.js";
import { getLouvre3Scene } from "./louvre3.js";

export function getLouvre2Scene() {

    return {
        id: "louvre2",
        background_img: "assets/images/museeDuLouvreInside.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: "박물관에 들어가니 프랑스어로 적힌 안내문이 보인다.", overlayImg: "assets/images/louvreConsignes.png" },
            { speaker: ``, text: "Merci de ne pas toucher les œuvres.", overlayImg: "assets/images/louvreConsignes.png" },
            { speaker: ``, text: "Vous pouvez prendre des photos.", overlayImg: "assets/images/louvreConsignes.png" },
            { speaker: ``, text: "Par contre, merci de ne pas utiliser le flash.", overlayImg: "assets/images/louvreConsignes.png" },
            { speaker: ``, text: "Il est interdit de manger dans les salles.", overlayImg: "assets/images/louvreConsignes.png" },
            { speaker: ``, text: "Veuillez respecter le silence pour le confort de tous.", overlayImg: "assets/images/louvreConsignes.png" },
            { speaker: `📢`, text: "박물관에서는 정해진 규칙을 잘 따라야겠죠?", overlayImg: "assets/images/louvreConsignes.png" },
            { speaker: `📢`, text: "규칙을 잘 이해했는지 테스트 해보겠습니다.", overlayImg: "assets/images/louvreConsignes.png" },
            { speaker: ``, text: ``,
                choices: {
                    prompt: "다음 중 안내문에서 설명하는 내용으로 옳지 않은 것은?",
                    options: [
                        {
                            label: "작품을 촬영하면 안 된다.",
                            scoreDelta: 3,
                            insertLines: [
                                { speaker: `📢`, text: `정답입니다! 플래시 사용은 금지되어 있지만, 사진 촬영은 가능합니다. 3점이 추가되었습니다.` },
                                { speaker: `📢`, text: `"Vous pouvez prendre des photos. Par contre, merci de ne pas utiliser le flash."` },
                            ]
                        },
                        {
                            label: "음식을 섭취하면 안 된다.",
                            scoreDelta: -1,
                            insertLines: [
                                { speaker: `📢`, text: `아쉽네요! 정답은 "작품을 촬영하면 안 된다." 였습니다.` },
                                { speaker: `📢`, text: `플래시 사용은 금지되어 있지만, 사진 촬영은 가능합니다. 1점이 차감되었습니다.` },
                                { speaker: `📢`, text: `"Vous pouvez prendre des photos. Par contre, merci de ne pas utiliser le flash."` },
                            ]
                        },
                        {
                            label: "시끄럽게 하면 안 된다.",
                            scoreDelta: -1,
                            insertLines: [
                                { speaker: `📢`, text: `아쉽네요! 정답은 "작품을 촬영하면 안 된다." 였습니다.` },
                                { speaker: `📢`, text: `플래시 사용은 금지되어 있지만, 사진 촬영은 가능합니다. 1점이 차감되었습니다.` },
                                { speaker: `📢`, text: `"Vous pouvez prendre des photos. Par contre, merci de ne pas utiliser le flash."` },
                            ]
                        },
                    ]
                }
             },
             { speaker: `📢`, text: "이제 본격적으로 박물관을 둘러볼까요?" },
        ],

        nextScene: () => {
            return getLouvre3Scene();
        }
    }
}