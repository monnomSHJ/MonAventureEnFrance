import { state } from "../../script.js";
import { renderQuest } from "../../statusBar.js";
import { getStrasbourg2Scene } from "./strasbourg2.js";

export function getStrasbourg1adScene() {

    return {
        id: "strasbourg1ad",
        background_img: "assets/images/inTrain.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `예매한 자리에 앉았다.` },
            { speaker: `🚈 Conducteur de train`, text: `Nous vous remercions de votre patience et de votre compréhension.` },
            { speaker: `🚈 Conducteur de train`, text: `Le train part dans une minute.` },
            { speaker: `🚈 Conducteur de train`, text: `Avant de partir, n'oubliez jamais de mettre votre ceinture.` },
            { speaker: `🚈 Conducteur de train`, text: `Il ne faut fumer ni cigarette ni vapoteuse dans tout le train.` },
            { speaker: `📢`, text: "짜잔~ 깜짝 퀴즈!" },
            { speaker: ``, text: "",
                choices: {
                    prompt: "다음 중 안내 방송에서 설명하는 내용으로 옳지 않은 것은?",
                    options: [
                        {
                            label: "기차는 1분 뒤에 출발한다",
                            scoreDelta: -1,
                            insertLines: [
                                { speaker: `📢`, text: `아쉽네요! 기차는 1분 뒤에 출발합니다. 1점이 차감되었습니다.` },
                                { speaker: `📢`, text: `정답은 "전자담배 흡연은 가능하다"였습니다.` },
                                { speaker: `📢`, text: `기차 내에서는 일반 담배와 전자담배 모두 흡연이 불가합니다.` },
                                { speaker: `📢`, text: `"Il ne faut fumer ni cigarette ni vapoteuse dans tout le train."` },
                            ],
                        },
                        {
                            label: "전자담배 흡연은 가능하다",
                            scoreDelta: 3,
                            insertLines: [
                                { speaker: `📢`, text: `정답입니다! 기차 내에서는 일반 담배와 전자담배 모두 흡연이 불가합니다. 3점이 추가되었습니다.` },
                                { speaker: `📢`, text: `"Il ne faut fumer ni cigarette ni vapoteuse dans tout le train."` },
                            ],
                        },
                                                {
                            label: "안전벨트를 착용해야 한다",
                            scoreDelta: -1,
                            insertLines: [
                                { speaker: `📢`, text: `아쉽네요! 기차는 1분 뒤에 출발합니다. 1점이 차감되었습니다.` },
                                { speaker: `📢`, text: `정답은 "전자담배 흡연은 가능하다"였습니다.` },
                                { speaker: `📢`, text: `기차 내에서는 일반 담배와 전자담배 모두 흡연이 불가합니다.` },
                                { speaker: `📢`, text: `"Il ne faut fumer ni cigarette ni vapoteuse dans tout le train."` },
                            ],
                        },
                    ]
                }
             },
             { speaker: `📢`, text: `문제 푸느라 고생 많으셨습니다. 🥳` },
             { speaker: `📢`, text: `스트라스부르에 도착할 때까지 잠시만 기다려주세요!` },
        ],

        nextScene: () => {
            state.currentQuest = "스트라스부르메인",
            renderQuest();
            return getStrasbourg2Scene();
        }
    }
}