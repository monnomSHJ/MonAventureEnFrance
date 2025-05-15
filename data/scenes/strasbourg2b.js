import { state } from "../../script.js";
import { renderStatusBar } from "../../statusBar.js";
import { getStrasbourg2b2Scene } from "./strasbourg2b2.js";

export function getStrasbourg2bScene() {

    function makeTicketOptions() {
        const wrongAnswer = (label) => ({
            label,
            scoreDelta: -1,
            insertLines: [
                { speaker: `📢`, text: `잘못된 가격인 것 같습니다. 다시 시도해봅시다.` },
                { speaker: ``, text: ``, showChoiceAgain: true,
                    choices: {
                        prompt: "얼마를 지불해야 할까?",
                        options: () => makeTicketOptions()
                    }
                 }
            ]
        });

        return [
            wrongAnswer("7` 유로"),
            {
                label: "8 유로",
                scoreDelta: 1,
                insertLines: [
                    { speaker: `📢`, text: `성공적으로 티켓을 예매했습니다. 8 유로가 차감되고 1 점이 추가되었습니다.` },
                ],
                customAction: () => {
                    state.balance -= 8;
                    renderStatusBar();
                }
            },
            wrongAnswer("9 유로"),
            wrongAnswer("10 유로")
        ]   
    }

    return {
        id: "strasbourg2b",
        background_img: "assets/images/notreDameDeStrasbourg.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `여기는 방문 티켓을 예매해야 갈 수 있는 곳이네.` },
            { speaker: `👤 ${state.userName}`, text: `어디보자... 표 가격이...` },
            { speaker: `👤 ${state.userName}`, text: `'Huit euros par personne'이라고 적혀있다.` },
            { speaker: `👤 ${state.userName}`, text: `그러면 나는 얼마를 지불해야 하는 거지?` },
            { speaker: ``, text: ``,
                choices: {
                    prompt: "얼마를 지불해야 할까?",
                    options: () => makeTicketOptions()
                }
            },
            { speaker: `📱`, text: `Vous recevrez votre confirmation dans quelques minutes.`},
            { speaker: `👤 ${state.userName}`, text: `표를 가지고 대성당에 입장했다.` },
        ],

        nextScene: () => {
            return getStrasbourg2b2Scene()
        }
    }
}