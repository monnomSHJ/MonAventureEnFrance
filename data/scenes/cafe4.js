import { state } from "../../script.js";

export function getCafe4Scene() {

    return {
        id: "cafe4",
        background_img: "assets/images/restaurantMainBg.png",
        narration: "",
        retryLines: [
            { speaker: `👨‍🍳 Serveur`, text: "Pardon ?", personImg: "assets/images/restaurantPerson1.png"},
            { speaker: `👤 ${state.userName}`, text: ".. 다시 한 번 시도해보자.", personImg: "assets/images/restaurantPerson1.png"},
            { speaker: `📢`, text: "1점이 차감되었습니다.", personImg: "assets/images/restaurantPerson1.png"}
        ],
        Lines: [
            { speaker: `👤 ${state.userName}`, text: `다시 식당에 돌아왔다.` },
            { speaker: `👨‍🍳 Serveur`, text: `Bonjour.`, personImg: "assets/images/restaurantPerson1.png" },
            { speaker: `👤 ${state.userName}`, text: `Bonjour.`, personImg: "assets/images/restaurantPerson1.png" },
            { speaker: `👤 ${state.userName}`, text: `...`, personImg: "assets/images/restaurantPerson1.png" },
            { speaker: ``, text: `문제 상황이라 그런지 머리가 잘 안 돌아간다...`, personImg: "assets/images/restaurantPerson1.png" },
            { speaker: ``, text: `침착하게 프랑스어로 내 상황을 설명해야 한다.`, personImg: "assets/images/restaurantPerson1.png" },
            { speaker: ``, text: ``, personImg: "assets/images/restaurantPerson1.png",
                production: {
                    prompt: "j'ai mangé ici _ 30 minutes.",
                    meaning: "제가 30분 전에 여기에서 식사를 했는데요.",
                    words: ["il y a", "dans", "depuis", "pour", "quand", "à"],
                    answer: ["il y a"]
                }
            },
            { speaker: `📢`, text: "문장 만들기 성공! 5점을 획득하였습니다.", personImg: "assets/images/restaurantPerson1.png"},
            { speaker: ``, text: ``, personImg: "assets/images/restaurantPerson1.png",
                production: {
                    prompt: "j'ai mangé ici _ 30 minutes.",
                    meaning: "제 생각에 여기에서 뭔가를 잃어버린 것 같아요.",
                    words: ["il y a", "dans", "depuis", "pour", "quand", "à"],
                    answer: ["il y a"]
                }
            },
        ],

        nextScene: () => {
            console.log('dd');
        }
    }
}