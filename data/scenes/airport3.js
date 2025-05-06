import { state } from "../../script.js";
import { getAirport4Scene } from "./airport4.js";

export function getAirport3Scene() {
    const fullMap = [
        ['W','W','W','W','W','W','W','W','W','W','W','W', ' ', 'T', 'T', ' ', 'W', 'W', 'W', 'W'],
        ['W','W','W','W','W','W','W','W','W','W','W','W', ' ', ' ', ' ', ' ', 'W', 'W', 'W', 'W'],
        ['W','W','W','W','W','W','W','W','W','W','W','W', ' ', ' ', ' ', ' ', 'W', 'W', 'W', 'W'],
        ['W','W','W','W','W','W','W','W','W','W','W','W', ' ', ' ', ' ', ' ', 'W', 'W', 'W', 'W'],
        ['T',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ', ' ', ' ', ' ', ' ', 'W', 'W', 'W', 'W'],
        ['T',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        ['W','W','W','W','W','W','W','W','W','W','W','W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'T'],
        ['W','W','W','W','W','W','W','W','W','W','W','W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', 'T'],
        ['W','W','W','W','W','W','W','W','W','W','W','W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        ['W','W','W','W','W','W','W','W','W','W','W','W', ' ', ' ', ' ', ' ', ' ', 'W', 'W', 'W'],
        [' ',' ',' ',' ',' ',' ',' ',' ','W','W','W','W', ' ', ' ', ' ', ' ', ' ', 'W', 'W', 'W'],
        [' ',' ',' ',' ',' ',' ',' ',' ','W','W','W','W', ' ', ' ', ' ', ' ', ' ', 'W', 'W', 'W'],
        [' ',' ',' ',' ',' ',' ',' ',' ','W','W','W','W', ' ', ' ', ' ', ' ', ' ', 'W', 'W', 'W'],
        ['W','W','W',' ',' ',' ',' ',' ','W','W','W','W', ' ', ' ', ' ', ' ', ' ', 'W', 'W', 'W'],
        ['W','W','W',' ',' ',' ',' ',' ','W','W','W','W', ' ', ' ', ' ', ' ', ' ', 'W', 'W', 'W'],
        ['W','W','W',' ',' ',' ',' ',' ','W','W','W','W', ' ', ' ', ' ', ' ', ' ', 'W', 'W', 'W'],
        ['W','W','W',' ',' ',' ',' ',' ','W','W','W','W', ' ', ' ', ' ', ' ', ' ', 'W', 'W', 'W'],
        ['W','W','W',' ',' ',' ',' ',' ',' ',' ',' ',' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W', 'W'],
        ['W','W','W',' ',' ',' ',' ',' ',' ',' ',' ',' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W', 'W'],
        ['W','W','W',' ',' ',' ',' ',' ',' ',' ',' ',' ', ' ', ' ', ' ', ' ', ' ', 'W', 'W', 'W'],
    ];

    const start = { x: 10, y: 19 };
    const correctTargets = [ { x: 0, y: 4 }, { x: 0, y: 5 }];
    const promptText = "👩‍💼 Tout d'abord, suivez le couloir à droite, puis tournez à gauche après les ascenseurs."

    return {
        id: "airport3",
        background_img: "assets/images/airportMain.jpg",
        miniMapGame: { map: fullMap, start, correctTargets, promptText, mapImg: "assets/images/airportMapGameBg.png" },
        retryLines: [
            { speaker: `👤 ${state.userName}`, text: "여기가 아닌 것 같은데... 다시 찾아가보자."},
            { speaker: `📢`, text: "1점이 차감되었습니다."}
        ],
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: "이제 알려주신 대로 길을 찾아 가보자."},
            { speaker: "", text: "", miniGame: true},
            { speaker: `📢`, text: "길찾기 성공! 5점을 획득하였습니다."},
            { speaker: `👤 ${state.userName}`, text: "도착했다! 이제 택시를 타고 호텔로 가면 되겠어."}
        ],

        nextScene: () => {
            return getAirport4Scene();
        }
    };
}