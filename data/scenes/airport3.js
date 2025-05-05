/*import { state, showMiniMapGame } from "../../script.js";

export function getAirport3Scene() {
    const fullMap = [
        ['W','W','W','W','W','W','T','W','W','W','W','W','W'],
        ['W','W','W','W','W','W',' ','W','W','W','W','W','W'],
        ['T',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','T'],
        ['W','W','W','W','W','W',' ','W','W','W','W','W','W'],
        ['W','W','W','W','W','W',' ','W','W','W','W','W','W'],
        ['W','W','W','W','W','B',' ','B','W','W','W','W','W'],
        ['W','W','W','W','W','W',' ','W','W','W','W','W','W'],
        ['W','W','W',' ',' ',' ',' ',' ',' ',' ','W','W','W'],
        ['W','W','W',' ','W','W','W','W','W',' ','W','W','W'],
        ['W','W','W',' ','W','W','W','W','W',' ','W','W','W'],
        ['W','W','W',' ','W','W','W','W','W',' ','W','W','W'],
        ['W','W','W',' ',' ',' ',' ',' ',' ',' ','W','W','W'],
        ['W','W','W','W','W','W','P','W','W','W','W','W','W'],
    ];

    const start = { x: 6, y: 12 };
    const targets = [ {x: 0, y: 2}];


    return {
        id: "airport3",
        background_img: "assets/images/airportMain.jpg",
        miniMapGame: { map: fullMap, start, targets },
        narration: "올바른 길을 찾아가봅시다.",
        lines: [
            { speaker: `👤 ${state.userName}`, text: "이제 알려주신 대로 길을 찾아 가보자."},
            { speaker: "", text: "", miniGame: true},
            { speaker: `👤 ${state.userName}`, text: "test"}
        ]
    };
}
    */