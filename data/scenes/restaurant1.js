import { state } from "../../script.js";

export function getRestaurant1Scene() {

const fullMap = [
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W'],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W'],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W'],
    [' ',' ',' ','W','W','W','W','W','W','W','W','W', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W'],
    [' ',' ',' ','W','W','W','W','W','W','W','W','W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ',' ',' ','W','W','W','W','W','W','W','W','W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ',' ',' ','W','W','W','W','W','W','W','W','W', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W'],
    [' ',' ',' ','W','W','W','W','W','W','W','W','W', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W'],
    [' ',' ',' ','W','W','W','W','W','W','W','W','W', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W'],
    [' ',' ',' ','W','W','W','W','W','W','W','W','W', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W'],
    [' ',' ',' ','W','W','W','W','W','W','W','W','W', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W'],
    [' ',' ',' ','W','W','W','W','W','W','W','W','W', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W'],
    [' ',' ',' ','W','W','W','W','W','W','W','W','W', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W'],
    [' ',' ',' ','W','W','W','W','W','W','W','W','W', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W'],
    [' ',' ',' ','W','W','W','W','W','W','W','W','W', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W'],
    [' ',' ',' ','W','W','W','W','W','W','W','W','W', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W'],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
];

const start = { x: 10, y: 19 };
const correctTargets = [ { x: 0, y: 4 }, { x: 0, y: 5 }];
const promptText = "👩‍💼 Pour aller au restaurant, sortez de l'hôtel, puis tournez à gauche. Continuez tout droit et tournez à droite à la pharmacie. Le restaurant se trouve à côté du Café de Flore."

 return {
        id: "restaurant1",
        background_img: "assets/images/hotelLobbyMain.jpg",
        narration: "",
        miniMapGame: { map: fullMap, start, correctTargets, promptText, mapImg: "assets/images/airportMapGameBg.png" },
        retryLines: [
            { speaker: `👤 ${state.userName}`, text: "여기가 아닌 것 같은데... 다시 찾아가보자."},
            { speaker: `📢`, text: "1점이 차감되었습니다."}
        ],
        lines: [
            { speaker: `👤 ${state.userName}`, text: "자! 직원 분이 알려준 대로 식당을 찾아 가보자." },
            { speaker: "", text: "", miniGame: true},
            { speaker: `👤 ${state.userName}`, text: "test" }
        ],
        
        nextScene: () => {
            console.log('dd');
        }
    }
}