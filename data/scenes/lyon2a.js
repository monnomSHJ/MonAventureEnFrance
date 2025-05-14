import { state } from "../../script.js";
import { renderStatusBar } from "../../statusBar.js";
import { getLyon2a2Scene } from "./lyon2a2.js";

export function getLyon2aScene() {

    return {
        id: "lyon2a",
        background_img: "assets/images/miniatureBg.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `여기는 방문 티켓을 예매해야 갈 수 있는 곳이네.` },
            { speaker: `👤 ${state.userName}`, text: `어디보자... 표 가격이...` },
            { speaker: `👤 ${state.userName}`, text: `'Vingt euros par personne'이라고 적혀있다.` },
            { speaker: `👤 ${state.userName}`, text: `그러면 나는 얼마를 지불해야 하는 거지?` },
            { speaker: ``, text: ``,
                choices: {
                    prompt: "얼마를 지불해야 할까?",
                    options: [
                        {
                            label: "20 유로",
                            scoreDelta: 1,
                            insertLines: [
                                { speaker: `📢`, text: `성공적으로 티켓을 예매했습니다. 20 유로가 차감되고 1점이 추가되었습니다.` },
                            ],
                            customAction: () => {
                                state.balance -= 20;
                                renderStatusBar();
                            }
                        },
                        {
                            label: "30 유로",
                            scoreDelta: -1,
                            insertLines: [
                                { speaker: `📢`, text: `잘못된 가격인 것 같습니다. 다시 시도해봅시다.` },
                                { speaker: ``, text: ``, showChoiceAgain: true }
                            ]
                        },
                                                {
                            label: "30 유로",
                            scoreDelta: -1,
                            insertLines: [
                                { speaker: `📢`, text: `잘못된 가격인 것 같습니다. 다시 시도해봅시다.` },
                                { speaker: ``, text: ``, showChoiceAgain: true }
                            ]
                        },
                                                {
                            label: "50 유로",
                            scoreDelta: -1,
                            insertLines: [
                                { speaker: `📢`, text: `잘못된 가격인 것 같습니다. 다시 시도해봅시다.` },
                                { speaker: ``, text: ``, showChoiceAgain: true }
                            ]
                        },
                    ]
                }
            },
            { speaker: `👤 ${state.userName}`, text: `표를 가지고 박물관에 입장했다.` },
        ],

        nextScene: () => {
            return getLyon2a2Scene()
        }
    }
}