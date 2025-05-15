import { state } from "../../script.js";
import { getHotel4Scene } from "./hotel4.js";

export function getHotel3Scene() {

    function makeElevatorOptions() {
        const wrongFloor = (label, comment) => ({
            label,
            scoreDelta: -1,
            insertLines: [
                { speaker: `👤 ${state.userName}`, text: comment },
                { speaker: `📢`, text: `1점이 차감되었습니다. 다시 시도해봅시다.` },
                { speaker: "", text: "", showChoiceAgain: true,
                    choices: {
                        prompt: "어떤 층으로 갈까요?",
                        options: () => makeElevatorOptions()
                    }
                }
            ]
        });
        
        return [
            wrongFloor("5", "이 층에는 내 방이 없어."),
            wrongFloor("4", "이 층에는 내 방이 없어."),
            { label: "3", scoreDelta: 5, insertLines: [
                { speaker: `👤 ${state.userName}`, text: `내 방을 찾았다! 유후!` },
                { speaker: `📢`, text: `305호 앞에 도착했습니다. 5점이 추가되었습니다.` },
            ]
            },
            wrongFloor("2", "이 층에는 내 방이 없어."),
            wrongFloor("1", "이 층에는 내 방이 없어."),
            wrongFloor("0", "여기는 내가 지금 있는 층이었다."),
        ];
    }

    return {
        id: "hotel3",
        background_img: "assets/images/hotelLobbyMain.jpg",
        narration: "",
        retryLines: [],
        lines: [
            { speaker: `👤 ${state.userName}`, text: `호텔 엘리베이터를 이용해서 내 방이 있는 층으로 이동하자.` },
            { speaker: `👤 ${state.userName}`, text: `어떤 버튼을 누를까?` },
            { speaker: ``, text: ``,
                choices: {
                    prompt: "어떤 층으로 갈까요?",
                    options: () => makeElevatorOptions()
                }
             },
        ],
        
        nextScene: () => {
            return getHotel4Scene();
        }
    }
}