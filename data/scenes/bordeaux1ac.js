import { state } from "../../script.js";
import { getBordeaux1adScene } from "./bordeaux1ad.js";

export function getBordeaux1acScene() {
    
    return {
        id: "bordeaux1ac",
        background_img: "assets/images/parisGareDeLest.jpg",
        narration: "",
        retryLines: [
            { speaker: `👤 Agent en gare`, text: "Pardon ?", personImg: "assets/images/garePerson2.png"},
            { speaker: `👤 ${state.userName}`, text: ".. 다시 한 번 시도해보자.", personImg: "assets/images/garePerson2.png"},
            { speaker: `📢`, text: "1점이 차감되었습니다.", personImg: "assets/images/garePerson2.png"}
        ],
        lines: [
            { speaker: `👤 ${state.userName}`, text: `기차가 올 때가 됐는데... 왜 이렇게 안 오지?` },
            { speaker: `👤 ${state.userName}`, text: `안내 직원에게 상황을 물어보자.` },
            { speaker: `👤 ${state.userName}`, text: `Excusez-moi.` },
            { speaker: `👤 Agent en gare`, text: `Oui, vous avez besoin d'aide ?`, personImg: "assets/images/garePerson2.png" },
            { speaker: `👤 ${state.userName}`, text: `Pourquoi le train n'arrive-t-il pas ?`, personImg: "assets/images/garePerson2.png" },
            { speaker: `👤 Agent en gare`, text: `Le train a été retardé à cause de la grève.`, personImg: "assets/images/garePerson2.png" },
            { speaker: ``, text: `그러면 언제 기차가 도착하는지 물어봐야겠다.`, personImg: "assets/images/garePerson2.png" },
            { speaker: ``, text: ``, personImg: "assets/images/garePerson2.png",
                    production: {
                    prompt: "_ est-ce que le train va _ ?",
                    meaning: "기차는 언제 도착하나요?",
                    words: ["Pourquoi", "Où", "Quand", "arriver", "aller"],
                    answer: ["Quand", "arriver"]
                }
             },
             { speaker: `👤 ${state.userName}`, text: `Quand est-ce que le train va arriver ?`, personImg: "assets/images/garePerson2.png" },
             { speaker: `📢`, text: "문장 만들기 성공! 5점을 획득하였습니다.", personImg: "assets/images/garePerson2.png" },
             { speaker: `👤 Agent en gare`, text: `Il arrive dans 10 minutes.`, personImg: "assets/images/garePerson2.png" },
             { speaker: `👤 Agent en gare`, text: `Je suis très désolé pour le retard du train.`, personImg: "assets/images/garePerson2.png" },
             { speaker: ``, text: `뭐라고 답할까?`, personImg: "assets/images/garePerson2.png" },
             { speaker: ``, text: ``, personImg: "assets/images/garePerson2.png",
                choices: {
                    prompt: "사과에 대해 뭐라고 답하면 좋을까?",
                    options: [
                        {
                            label: "Ça ne fait rien !",
                            insertLines: [
                                { speaker: `👤 ${state.userName}`, text: `Ça ne fait rien !`, personImg: "assets/images/garePerson2.png" },
                            ],
                        },
                                                {
                            label: "C'est pas grave !",
                            insertLines: [
                                { speaker: `👤 ${state.userName}`, text: `C'est pas grave !`, personImg: "assets/images/garePerson2.png" },
                            ],
                        },
                    ]
                }
             },
             { speaker: `👤 ${state.userName}`, text: `10분 정도 뒤에, 보르도행 기차가 도착했다.` },
        ],

        nextScene: () => {
            return getBordeaux1adScene();
        }
    }
}