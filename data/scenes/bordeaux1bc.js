import { state } from "../../script.js";
import { renderQuest } from "../../statusBar.js";
import { getBordeaux2Scene } from "./bordeaux2.js";

export function getBordeaux1bcScene() {

    return {
        id: "bordeaux1bc",
        background_img: "assets/images/inBus.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `예매한 자리에 앉았다.` },,
            { speaker: `🚈 Conducteur de bus`, text: `Le bus part dans une minute.` },
            { speaker: `🚈 Conducteur de bus`, text: `Avant de partir, n'oubliez jamais de mettre votre ceinture.` },
            { speaker: `🚈 Conducteur de bus`, text: `Il ne faut fumer ni cigarette ni vapoteuse dans le bus.` },
            { speaker: `📢`, text: "짜잔~ 깜짝 퀴즈!" },
            { speaker: ``, text: "",
                choices: {
                    prompt: "다음 중 옳지 않은 것은?",
                    options: [
                        {
                            label: "버스는 1분 뒤에 출발한다",
                            scoreDelta: -1,
                            insertLines: [
                                { speaker: `📢`, text: `아쉽네요! 버스는 1분 뒤에 출발합니다. 1점이 차감되었습니다.` },
                                { speaker: `📢`, text: `정답은 "전자담배 흡연은 가능하다"였습니다.` },
                                { speaker: `📢`, text: `버스 내에서는 일반 담배와 전자담배 모두 흡연이 불가합니다.` },
                                { speaker: `📢`, text: `"Il ne faut fumer ni cigarette ni vapoteuse dans le bus."` },
                            ],
                        },
                        {
                            label: "버스 안에서 전자담배 흡연은 가능하다",
                            scoreDelta: 3,
                            insertLines: [
                                { speaker: `📢`, text: `정답입니다! 버스 내에서는 일반 담배와 전자담배 모두 흡연이 불가합니다. 3점이 추가되었습니다.` },
                                { speaker: `📢`, text: `"Il ne faut fumer ni cigarette ni vapoteuse dans le bus."` },
                            ],
                        },
                                                {
                            label: "안전벨트를 착용해야 한다",
                            scoreDelta: -1,
                            insertLines: [
                                { speaker: `📢`, text: `아쉽네요! 버스는 1분 뒤에 출발합니다. 1점이 차감되었습니다.` },
                                { speaker: `📢`, text: `정답은 "전자담배 흡연은 가능하다"였습니다.` },
                                { speaker: `📢`, text: `버스 내에서는 일반 담배와 전자담배 모두 흡연이 불가합니다.` },
                                { speaker: `📢`, text: `"Il ne faut fumer ni cigarette ni vapoteuse dans le bus."` },
                            ],
                        },
                    ]
                }
             },
             { speaker: `📢`, text: `문제 푸느라 고생 많으셨습니다. 🥳` },
             { speaker: `📢`, text: `보르도에 도착할 때까지 잠시만 기다려주세요!` },
        ],

        nextScene: () => {
            state.currentQuest = "보르도메인",
            renderQuest();
            return getBordeaux2Scene();
        }
    }
}