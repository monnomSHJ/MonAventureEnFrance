import { state } from "../../script.js";

export function getAirport2Scene() {
    return {
        id: "airport2",
        background_img: "assets/images/airportMain.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: "Excusez-moi."},
            { speaker: `👩‍💼 Employée`, text: "Oui, vous avez besoin de l'aide ?", personImg: "assets/images/airportPerson1.png"},
            { speaker: `👩‍💼 Employée`, text: "프랑스어로 택시 승강장 위치를 물어보려면 어떻게 해야 하지?", personImg: "assets/images/airportPerson1.png"},
            { speaker: `👤 ${state.userName}`, text: "", personImg: "assets/images/airportPerson1.png",
                production: {
                    prompt: "_ _ la station de taxi, s'il vous plaît ?",
                    meaning: "택시 승강장은 어디에 있나요?",
                    words: ["est", "Quand", "moi", "Où", "Pourquoi"],
                    answer: ["Où", "est"]
                }
            },
            { speaker: `👩‍💼 Employée`, text: "test", personImg: "assets/images/airportPerson1.png"},
            { speaker: `👤 ${state.userName}`, text: "test", personImg: "assets/images/airportPerson1.png"}
        ],
    }
}