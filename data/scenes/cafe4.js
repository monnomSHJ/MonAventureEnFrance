import { state } from "../../script.js";
import { renderQuest } from "../../statusBar.js";
import { getEiffelTower1Scene } from "./eiffelTower1.js";

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
        lines: [
            { speaker: `👤 ${state.userName}`, text: `다시 식당에 돌아왔다.` },
            { speaker: `👨‍🍳 Serveur`, text: `Bonjour.`, personImg: "assets/images/restaurantPerson1.png" },
            { speaker: `👤 ${state.userName}`, text: `Bonjour.`, personImg: "assets/images/restaurantPerson1.png" },
            { speaker: `👤 ${state.userName}`, text: `...`, personImg: "assets/images/restaurantPerson1.png" },
            { speaker: ``, text: `문제 상황이라 그런지 머리가 잘 안 돌아간다...`, personImg: "assets/images/restaurantPerson1.png" },
            { speaker: ``, text: `침착하게 프랑스어로 내 상황을 설명해야 한다.`, personImg: "assets/images/restaurantPerson1.png" },
            { speaker: ``, text: ``, personImg: "assets/images/restaurantPerson1.png",
                production: {
                    prompt: "J'ai mangé ici _ 30 minutes.",
                    meaning: "제가 30분 전에 여기에서 식사를 했는데요.",
                    words: ["il y a", "dans", "depuis", "pour", "quand", "à"],
                    answer: ["il y a"]
                }
            },
            { speaker: `👤 ${state.userName}`, text: `J'ai mangé ici il y a 30 minutes.`, personImg: "assets/images/restaurantPerson1.png" },
            { speaker: `📢`, text: "문장 만들기 성공! 5점을 획득하였습니다.", personImg: "assets/images/restaurantPerson1.png"},
            { speaker: ``, text: ``, personImg: "assets/images/restaurantPerson1.png",
                production: {
                    prompt: "Je _ que j'ai _ _ ici.",
                    meaning: "제 생각에 여기에서 제가 뭔가를 잃어버린 것 같아요.",
                    words: ["mangé", "pense", "penses", "oublié", "quelque chose", "quelqu'un"],
                    answer: ["pense", "oublié", "quelque chose"]
                }
            },
            { speaker: `👤 ${state.userName}`, text: `Je pense que j'ai oublié quelque chose ici.`, personImg: "assets/images/restaurantPerson1.png" },
            { speaker: `📢`, text: "문장 만들기 성공! 5점을 획득하였습니다.", personImg: "assets/images/restaurantPerson1.png"},
            { speaker: `👨‍🍳 Serveur`, text: `Vous avez oublié quoi ?`, personImg: "assets/images/restaurantPerson1.png" },
            { speaker: `👤 ${state.userName}`, text: `Je pense que j'ai oublié un petit sac noir ici.`, personImg: "assets/images/restaurantPerson1.png" },
            { speaker: ``, text: ``, personImg: "assets/images/restaurantPerson1.png",
                production: {
                    prompt: "Est-ce que _ _ _ ?",
                    meaning: "당신은 그것(가방)을 보셨나요?",
                    words: ["vus", "m'avez", "avez", "vous", "l'avez", "vu", "tu", "vue"],
                    answer: ["vous", "l'avez", "vu"]
                }
            },
            { speaker: `👤 ${state.userName}`, text: `Est-ce que vous l'avez vu ?`, personImg: "assets/images/restaurantPerson1.png" },
            { speaker: `📢`, text: "문장 만들기 성공! 5점을 획득하였습니다.", personImg: "assets/images/restaurantPerson1.png"},
            { speaker: `👨‍🍳 Serveur`, text: `Il n'y a plus rien ici.`, personImg: "assets/images/restaurantPerson1.png" },
            { speaker: `👨‍🍳 Serveur`, text: `Peut-être que quelqu'un l'a pris.`, personImg: "assets/images/restaurantPerson1.png" },
            { speaker: `👤 ${state.userName}`, text: `Ah d'accord, merci beaucoup...`, personImg: "assets/images/restaurantPerson1.png" },
            { speaker: ``, text: `이런... 앞으로는 조금 더 조심해야겠다. 🥲` },
            { speaker: ``, text: `그래도 거기에 중요한 걸 넣어두지 않아서 다행이야.` },
            { speaker: ``, text: `완전 럭키비키잖아~🍀` },
            { speaker: ``, text: `...` },
            { speaker: ``, text: `아, 참! 파리에 왔으면 에펠탑을 보러 가야지.` },
            { speaker: ``, text: `가는 방법을 인터넷에서 찾아보자.` },
        ],

        nextScene: () => {
            state.currentQuest = "에펠탑";
            renderQuest();
            return getEiffelTower1Scene();
        }
    }
}