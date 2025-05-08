import { state } from "../../script.js";
import { renderQuest } from "../../statusBar.js";
import { getRestaurant2Scene } from "./restaurant2.js";

export function getRestaurant1Scene() {

const fullMap = [
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W'],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W'],
    [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W'],
    [' ',' ',' ','W','W','W','W','W','W','W','W','W', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W'],
    [' ',' ',' ','W','W','W','W','W','W','W','W','W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ',' ',' ','W','W','W','W','W','W','W','W','W', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
    [' ',' ','T','W','W','W','W','W','W','W','W','W', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W'],
    [' ',' ',' ','W','W','W','W','W','W','W','W','W', ' ', ' ', ' ', 'W', 'W', 'W', 'W', 'W'],
    [' ',' ',' ','W','W','W','W','W','W','W','W','W', ' ', ' ', 'T', 'W', 'W', 'W', 'W', 'W'],
    [' ',' ',' ','W','W','W','W','W','W','W','W','W', 'T', ' ', ' ', 'W', 'W', 'W', 'W', 'W'],
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
const correctTargets = [ { x: 2, y: 6 }];
const promptText = "👩‍💼 Pour aller au restaurant, sortez de l'hôtel, puis tournez à gauche. Continuez tout droit et tournez à droite à la pharmacie. Le restaurant se trouve à côté du Café de Flore."

 return {
        id: "restaurant1",
        background_img: "assets/images/hotelLobbyMain.jpg",
        narration: "",
        miniMapGame: { map: fullMap, start, correctTargets, promptText, mapImg: "assets/images/restaurantMapGameBg.png" },
        retryLines: [
            { speaker: `👤 ${state.userName}`, text: "여기가 아닌 것 같은데... 다시 찾아가보자."},
            { speaker: `📢`, text: "1점이 차감되었습니다."}
        ],
        lines: [
            { speaker: `👤 ${state.userName}`, text: "자! 직원 분이 알려준 대로 식당을 찾아 가보자." },
            { speaker: "", text: "", miniGame: true},
            { speaker: `📢`, text: "길찾기 성공! 5점을 획득하였습니다."},
            { speaker: `👤 ${state.userName}`, text: "추천받은 식당에 도착했다! 들어가보자."}
        ],
        
        nextScene: () => {
            state.currentQuest = "식당";
            renderQuest();
            return getRestaurant2Scene();
        }
    }
}