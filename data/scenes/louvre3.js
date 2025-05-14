import { state } from "../../script.js";
import { renderQuest } from "../../statusBar.js";
import { getToilet1Scene } from "./toilet1.js";

export function getLouvre3Scene() {

    const artworks = {
        "La Joconde": [
            { speaker: `📢`, text: "모나리자(La Joconde)는 레오나르도 다 빈치가 1503년경에 그린 대표적인 르네상스 초상화입니다.", overlayImg: "assets/images/monaLisa.jpg" },
            { speaker: `📢`, text: "신비한 미소와 부드러운 시선, 스푸마토 기법을 활용한 섬세한 명암 표현이 특징입니다.", overlayImg: "assets/images/monaLisa.jpg" },
            { speaker: `📢`, text: "모델은 피렌체 상인의 아내로 알려진 리자 델 조콘도(Lisa del Giocondo)로 추정됩니다.", overlayImg: "assets/images/monaLisa.jpg" },
            { speaker: `📢`, text: "현재 프랑스 루브르 박물관에 소장되어 있으며, 전 세계에서 가장 유명한 그림 중 하나입니다.", overlayImg: "assets/images/monaLisa.jpg" },
        ],
        "La Vénus de Milo": [
            { speaker: `📢`, text: "밀로의 비너스(La Vénus de Milo)는 고대 그리스에서 제작된 대리석 조각상으로, 기원전 2세기경에 만들어졌습니다.", overlayImg: "assets/images/venusDeMilo.png" },
            { speaker: `📢`, text: "아름답게 조각된 인체 비례와 부드러운 표정, 양팔이 없는 상태로 발견된 미스터리한 모습이 특징입니다.", overlayImg: "assets/images/venusDeMilo.png" },
            { speaker: `📢`, text: "사랑과 미의 여신 아프로디테(로마식 이름: 비너스)를 묘사한 것으로 알려져 있습니다.", overlayImg: "assets/images/venusDeMilo.png" },
            { speaker: `📢`, text: "1820년 그리스 밀로스 섬에서 발견되어 현재는 루브르 박물관에 전시되어 있습니다.", overlayImg: "assets/images/venusDeMilo.png" },
        ],
        "La Liberté guidant le peuple": [
            { speaker: `📢`, text: "민중을 이끄는 자유의 여신(La Liberté guidant le peuple)는 외젠 들라크루아(Eugène Delacroix)가 1830년에 그린 대표적인 낭만주의 회화입니다.", overlayImg: "assets/images/liberte.jpg" },
            { speaker: `📢`, text: "프랑스 7월 혁명을 배경으로, 자유의 여신이 민중을 이끌며 바리케이드를 넘어서는 장면을 생동감 있게 담아냈습니다.", overlayImg: "assets/images/liberte.jpg" },
            { speaker: `📢`, text: "깃발을 들고 전진하는 여성은 자유의 상징으로, 훗날 마리안느(Marianne)의 형상으로도 이어집니다.", overlayImg: "assets/images/liberte.jpg" },
            { speaker: `📢`, text: "이 작품은 정치적 저항과 혁명의 열망을 상징하며, 현재 루브르 박물관에 소장되어 있습니다.", overlayImg: "assets/images/liberte.jpg" },
        ],
        "Les Noces de Cana": [
            { speaker: `📢`, text: "가나의 혼인잔치(Les Noces de Cana)는 파올로 베로네세(Paolo Veronese)가 1563년에 그린 대형 르네상스 회화입니다.", overlayImg: "assets/images/nocesDeCana.jpg" },
            { speaker: `📢`, text: "신약성경 요한복음에 나오는 예수가 처음 기적을 행한 ‘물이 포도주로 변한 사건’을 묘사하고 있습니다.", overlayImg: "assets/images/nocesDeCana.jpg" },
            { speaker: `📢`, text: "이탈리아 베네치아풍의 건축과 화려한 색채, 130명이 넘는 인물들이 생동감 있게 표현된 것이 특징입니다.", overlayImg: "assets/images/nocesDeCana.jpg" },
            { speaker: `📢`, text: "원래 베네치아의 수도원에 있던 작품으로, 현재는 루브르 박물관에서 모나리자 맞은편에 전시되어 있습니다.", overlayImg: "assets/images/nocesDeCana.jpg" },
        ]
    };

    function makeChoice(label) {
        state.viewedArtworks.add(label);

        const lines = artworks[label].map(line => ({ ...line }));

        if (state.viewedArtworks.size < 4) {
            lines.push({
                speaker: "",
                text: "",
                showChoiceAgain: true,
                choices: {
                    prompt: "어떤 작품을 감상해볼까요?",
                    options: () => makeOptions()
                }
            });
        } else {
            lines.push({ speaker: "📢", text: "모든 작품을 감상했습니다. 이제 다음으로 넘어가볼까요?" });
        }
        
        return lines;
    };

    function makeOptions() {
        return Object.keys(artworks).map(label => ({
            label,
            scoreDelta: 0,
            insertLines: () => makeChoice(label),
            disabled: state.viewedArtworks.has(label)
        }));
    }

    return {
        id: "louvre3",
        background_img: "assets/images/museeDuLouvreInside.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: "어떤 작품을 감상할까?" },
            { speaker: ``, text: ``,
                choices: {
                    prompt: "어떤 작품을 감상해볼까요?",
                    get options() {
                        return makeOptions();
                    }
                }
             }
        ],

        nextScene: () => {
            state.currentQuest = "화장실",
            renderQuest();
            return getToilet1Scene();
        }
    }
}