import { state } from "../../script.js";
import { getAirport3Scene } from "./airport3.js";

export function getAirport2Scene() {
    return {
        id: "airport2",
        background_img: "assets/images/airportMain.jpg",
        narration: "",
        retryLines: [
            { speaker: `👩‍💼 Employée`, text: "Pardon ?", personImg: "assets/images/airportPerson1.png"},
            { speaker: `👤 ${state.userName}`, text: ".. 다시 한 번 시도해보자.", personImg: "assets/images/airportPerson1.png"},
            { speaker: `📢`, text: "1점이 차감되었습니다.", personImg: "assets/images/airportPerson1.png"}
        ],
        lines: [
            { speaker: `👤 ${state.userName}`, text: "Excusez-moi."},
            { speaker: `👩‍💼 Employée`, text: "Oui, vous avez besoin d'aide ?", personImg: "assets/images/airportPerson1.png"},
            { speaker: `👩‍💼 Employée`, text: "프랑스어로 택시 승강장 위치를 물어보려면 어떻게 해야 하지?", personImg: "assets/images/airportPerson1.png"},
            { speaker: ``, text: "", personImg: "assets/images/airportPerson1.png",
                production: {
                    prompt: "_ _ la station de taxi, s'il vous plaît ?",
                    meaning: "택시 승강장은 어디에 있나요?",
                    words: ["est", "Quand", "moi", "Où", "Pourquoi"],
                    answer: ["Où", "est"]
                }
            },
            { speaker: `📢`, text: "문장 만들기 성공! 5점을 획득하였습니다.", personImg: "assets/images/airportPerson1.png"},
            { speaker: `👤 ${state.userName}`, text: "Où est la station de taxi, s'il vous plaît ?", personImg: "assets/images/airportPerson1.png"},
            { speaker: `👩‍💼 Employée`, text: "Bien sûr ! Tout d'abord, suivez le couloir à droite, puis tournez à gauche après les ascenseurs.", personImg: "assets/images/airportPerson1.png"},
            { speaker: `👤 ${state.userName}`, text: "Merci beaucoup !", personImg: "assets/images/airportPerson1.png"},
            { speaker: `👩‍💼 Employée`, text: "Avec plaisir. Bonne journée !", personImg: "assets/images/airportPerson1.png"}
            
        ],

        nextScene: () => {
            return getAirport3Scene();
        }
    }
}