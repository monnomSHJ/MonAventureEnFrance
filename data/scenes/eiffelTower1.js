import { state } from "../../script.js";
import { renderQuest } from "../../statusBar.js";
import { getEiffelTower2Scene } from "./eiffelTower2.js";

export function getEiffelTower1Scene() {
    
    return {
        id: "eiffelTower1",
        background_img: "assets/images/eiffel-tower.jpg",
        narration: "",
        retryLines: [
            { speaker: `👤 ???`, text: "Pardon ?", personImg: "assets/images/eiffelTowerPerson1.png"},
            { speaker: `👤 ${state.userName}`, text: ".. 다시 한 번 시도해보자.", personImg: "assets/images/eiffelTowerPerson1.png"},
            { speaker: `📢`, text: "1점이 차감되었습니다.", personImg: "assets/images/eiffelTowerPerson1.png"}
        ],
        lines: [
            { speaker: `👤 ${state.userName}`, text: `버스를 타고 에펠탑 앞에 도착했다.` },
            { speaker: `👤 ${state.userName}`, text: `사진으로 보던 것보다 훨씬 큰 것 같다.` },
            { speaker: `👤 ${state.userName}`, text: `사진으로 남겨둬야지. 찰칵찰칵.` },
            { speaker: `👤 ???`, text: `Bonjour ! Il ne fait pas beau aujourd'hui ?`, personImg: `assets/images/eiffelTowerPerson1.png` },
            { speaker: ``, text: ``, personImg: `assets/images/eiffelTowerPerson1.png`,
                choices: {
                    prompt: "뭐라고 답할까?",
                    options: [
                        {
                            label: "Oui, vous êtes beau.",
                            scoreDelta: -1,
                            insertLines: [
                                { speaker: `👤 ${state.userName}`, text: "Oui, vous êtes beau.", personImg: "assets/images/eiffelTowerPerson1.png" },
                                { speaker: `👤 ???`, text: "... Pardon ?", personImg: "assets/images/eiffelTowerPerson1.png" },
                                { speaker: `📢`, text: "맥락에 더 적합한 표현을 사용하는 것이 좋겠습니다.", personImg: "assets/images/eiffelTowerPerson1.png" },
                                { speaker: `📢`, text: "1점이 차감되었습니다.", personImg: "assets/images/eiffelTowerPerson1.png" },
                                { speaker: ``, text: ``, showChoiceAgain: true,
                                    choices: {
                                        prompt: "뭐라고 답할까?",
                                        options: [
                                            {
                                                label: "Si, il fait très beau.",
                                                scoreDelta: 3,
                                                insertLines: [
                                                    { speaker: `👤 ${state.userName}`, text: "Si, il fait très beau.", personImg: "assets/images/eiffelTowerPerson1.png" },
                                                    { speaker: `📢`, text: "좋아요! 맥락에도 적합하고, 문법적으로도 적절한 표현입니다.", personImg: "assets/images/eiffelTowerPerson1.png" },
                                                    { speaker: `📢`, text: "3점이 추가되었습니다.", personImg: "assets/images/eiffelTowerPerson1.png" },
                                                ],
                                            },
                                            {
                                                label: "Oui, il fait très beau.",
                                                scoreDelta: 0,
                                                insertLines: [
                                                    { speaker: `👤 ${state.userName}`, text: "Oui, il fait très beau.", personImg: "assets/images/eiffelTowerPerson1.png" },
                                                    { speaker: `📢`, text: "좋아요! 하지만 문법적으로, 부정의문문에 대한 긍정 답변은 'si'를 사용하는 것이 좋습니다.", personImg: "assets/images/eiffelTowerPerson1.png" },
                                                ],
                                            }
                                        ]
                                    }
                                 }
                            ],
                        },
                        {
                            label: "Si, il fait très beau.",
                            scoreDelta: 3,
                            insertLines: [
                                { speaker: `👤 ${state.userName}`, text: "Si, il fait très beau.", personImg: "assets/images/eiffelTowerPerson1.png" },
                                { speaker: `📢`, text: "좋아요! 맥락에도 적합하고, 문법적으로도 적절한 표현입니다.", personImg: "assets/images/eiffelTowerPerson1.png" },
                                { speaker: `📢`, text: "3점이 추가되었습니다.", personImg: "assets/images/eiffelTowerPerson1.png" },
                            ],
                        },
                        {
                            label: "Oui, il fait très beau.",
                            scoreDelta: 0,
                            insertLines: [
                                { speaker: `👤 ${state.userName}`, text: "Oui, il fait très beau.", personImg: "assets/images/eiffelTowerPerson1.png" },
                                { speaker: `📢`, text: "좋아요! 하지만 문법적으로, 부정의문문에 대한 긍정 답변은 'si'를 사용하는 것이 좋습니다.", personImg: "assets/images/eiffelTowerPerson1.png" },
                            ],
                        },
                    ]
                }
            },
            { speaker: `👤 ???`, text: `Les lumières de la tour Eiffel commencent à s'allumer au coucher du soleil.`, personImg: `assets/images/eiffelTowerPerson1.png` },
            { speaker: `👤 ???`, text: `Le saviez-vous ?`, personImg: `assets/images/eiffelTowerPerson1.png` },
            { speaker: ``, text: ``, personImg: `assets/images/eiffelTowerPerson1.png`,
                choices: {
                    prompt: "뭐라고 답할까?",
                    options: [
                        {
                            label: "Oui, je le savais déjà, mais merci beaucoup !",
                            scoreDelta: 0,
                            insertLines: [
                                { speaker: `👤 ${state.userName}`, text: "Oui, je le savais déjà, mais merci beaucoup !", personImg: "assets/images/eiffelTowerPerson1.png" },
                            ],
                        },
                        {
                            label: "Non, je ne le savais pas. Merci de me l'avoir dit.",
                            scoreDelta: 0,
                            insertLines: [
                                { speaker: `👤 ${state.userName}`, text: "Non, je ne le savais pas. Merci de me l'avoir dit.", personImg: "assets/images/eiffelTowerPerson1.png" },
                            ],
                        }
                    ]
                }
            },
            { speaker: ``, text: "참, 이분에게 사진 한 장만 찍어달라고 부탁드려볼까?", personImg: "assets/images/eiffelTowerPerson1.png" },
            { speaker: ``, text: "어떻게 부탁드리면 되지?", personImg: "assets/images/eiffelTowerPerson1.png" },
            { speaker: ``, text: "", personImg: "assets/images/eiffelTowerPerson1.png",
                production: {
                    prompt: "Pouvez-vous _ _ en photo, s'il vous plaît ?",
                    meaning: "제 사진 좀 찍어 주실래요?",
                    words: ["prendre", "un", "me", "vous"],
                    answer: ["me", "prendre"]
                }
             },
            { speaker: `👤 ${state.userName}`, text: "Pouvez-vous me prendre en photo, s'il vous plaît ?", personImg: "assets/images/eiffelTowerPerson1.png" },
            { speaker: `📢`, text: "문장 만들기 성공! 5점을 획득하였습니다.", personImg: "assets/images/eiffelTowerPerson1.png"},
            { speaker: `👤 ???`, text: `Bien sûr !`, personImg: `assets/images/eiffelTowerPerson1.png` },
            { speaker: `👤 ${state.userName}`, text: "Merci beaucoup !", personImg: "assets/images/eiffelTowerPerson1.png" },
            { speaker: ``, text: "우연히 만난 행인에게 부탁해 에펠탑 앞에서 사진을 잔뜩 찍었다.", personImg: "assets/images/eiffelTowerPerson1.png" },
        ],

        nextScene: () => {
            state.currentQuest = "",
            renderQuest();
            return getEiffelTower2Scene();
        }

    }
}