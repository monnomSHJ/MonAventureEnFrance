import { state } from "../../script.js";
import { getCafe1Scene } from "./cafe1.js";
import { renderQuest } from "../../statusBar.js";

export function getRestaurant5Scene() {

    const dish = state.selectedDish || {
        name: "quelque chose",
        price: 0,
        image: ""
    };

    return {
        id: "restaurant5",
        background_img: "assets/images/restaurantMainBg.png",
        narration: "",
        retryLines: [
            { speaker: `👨‍🍳 Serveur`, text: "Pardon ?", personImg: "assets/images/restaurantPerson1.png"},
            { speaker: `👤 ${state.userName}`, text: ".. 다시 한 번 시도해보자.", personImg: "assets/images/restaurantPerson1.png"},
            { speaker: `📢`, text: "1점이 차감되었습니다.", personImg: "assets/images/restaurantPerson1.png"}
        ],
        lines: [
            { speaker: ``, text: `${dish.price} 유로를 지불했다.`, personImg: "assets/images/restaurantPerson1.png" },
            { speaker: `📢`, text: `${dish.price} 점이 추가되었습니다.`, personImg: "assets/images/restaurantPerson1.png" },
            { speaker: `👤 ${state.userName}`, text: "이제 카페를 가면 좋겠는데, 추천을 부탁드려볼까?", personImg: "assets/images/restaurantPerson1.png" },
            { speaker: `👤 ${state.userName}`, text: "아까 호텔에서 했던 것처럼 물어보자.", personImg: "assets/images/restaurantPerson1.png" },
            { speaker: ``, text: "", personImg: "assets/images/restaurantPerson1.png",
                production: {
                    prompt: "_-vous _ _ _ _ d'ici ?",
                    meaning: "여기 근처의 좋은 카페 아시나요?",
                    words: ["Mangez", "un", "près", "Connaissez", "bon", "bonne", "une", "café"],
                    answer: ["Connaissez", "un", "bon", "café", "près"]
                }
            },
            { speaker: `📢`, text: "문장 만들기 성공! 5점을 획득하였습니다.", personImg: "assets/images/restaurantPerson1.png"},
            { speaker: `👤 ${state.userName}`, text: "Connaissez-vous un bon café près d'ici ?", personImg: "assets/images/restaurantPerson1.png"},
            { speaker: `👨‍🍳 Serveur`, text: "Bien sûr ! Je crois que le meilleur café de Paris est le Café de Flore.", personImg: "assets/images/restaurantPerson1.png"},
            { speaker: `👨‍🍳 Serveur`, text: "Parce que c'est un lieu historique aimé par des célébrités comme Jean-Paul Sartre et Simone de Beauvoir.", personImg: "assets/images/restaurantPerson1.png"},
            { speaker: ``, text: "언젠가 들어본 이름인데? 그게 누구더라?", personImg: "assets/images/restaurantPerson1.png"},
            { speaker: `👤 ${state.userName}`, text: "Jean-Paul Sartre, c'est qui ?", personImg: "assets/images/restaurantPerson1.png"},
            { speaker: `👨‍🍳 Serveur`, text: "Jean-Paul Sartre est un philosophe et écrivain français.", personImg: "assets/images/restaurantPerson1.png", overlayImg: "assets/images/jean-paul_sartre.jpg"},
            { speaker: `👨‍🍳 Serveur`, text: "Il est né en 1905 et il est mort en 1980.", personImg: "assets/images/restaurantPerson1.png", overlayImg: "assets/images/jean-paul_sartre.jpg"},
            { speaker: `👨‍🍳 Serveur`, text: "Il écrit un livre très connu : L'Être et le Néant(존재와 무).", personImg: "assets/images/restaurantPerson1.png", overlayImg: "assets/images/jean-paul_sartre.jpg"},
            { speaker: `👨‍🍳 Serveur`, text: "Il refuse le prix Nobel de littérature en 1964.", personImg: "assets/images/restaurantPerson1.png", overlayImg: "assets/images/jean-paul_sartre.jpg"},
            { speaker: `👤 ${state.userName}`, text: "Pouvez-vous aussi m'expliquer qui est Simone de Beauvoir ?", personImg: "assets/images/restaurantPerson1.png"},
            { speaker: `👨‍🍳 Serveur`, text: "Pourquoi pas !", personImg: "assets/images/restaurantPerson1.png"},
            { speaker: `👨‍🍳 Serveur`, text: "Simone de Beauvoir est une philosophe et écrivaine française.", personImg: "assets/images/restaurantPerson1.png", overlayImg: "assets/images/simone_de_beauvoir.jpeg"},
            { speaker: `👨‍🍳 Serveur`, text: "Elle est née en 1908 et elle est morte en 1986.", personImg: "assets/images/restaurantPerson1.png", overlayImg: "assets/images/simone_de_beauvoir.jpeg"},
            { speaker: `👨‍🍳 Serveur`, text: "Elle écrit un livre très important : Le Deuxième Sexe (제2의 성).", personImg: "assets/images/restaurantPerson1.png", overlayImg: "assets/images/simone_de_beauvoir.jpeg"},
            { speaker: `👨‍🍳 Serveur`, text: "Elle pense que la femme n'est pas libre à cause de la société.", personImg: "assets/images/restaurantPerson1.png", overlayImg: "assets/images/simone_de_beauvoir.jpeg"},
            { speaker: `👨‍🍳 Serveur`, text: "Elle veut que les femmes soient libres et égales.", personImg: "assets/images/restaurantPerson1.png", overlayImg: "assets/images/simone_de_beauvoir.jpeg"},
            { speaker: `👤 ${state.userName}`, text: "Merci pour votre explication.", personImg: "assets/images/restaurantPerson1.png"},
            { speaker: `👤 ${state.userName}`, text: "Où se trouve le café ?", personImg: "assets/images/restaurantPerson1.png"},
            { speaker: `👨‍🍳 Serveur`, text: "Le Café de Flore est juste à côté du restaurant !", personImg: "assets/images/restaurantPerson1.png" },
            { speaker: `👤 ${state.userName}`, text: "Très bien ! Merci beaucoup.", personImg: "assets/images/restaurantPerson1.png"},
            { speaker: `👨‍🍳 Serveur`, text: "Avec plaisir. Bonne journée.", personImg: "assets/images/restaurantPerson1.png" },
            { speaker: ``, text: "직원 분이 추천해준 카페로 바로 가보자." },
        ],

        nextScene: () => {
            state.currentQuest = "카페";
            renderQuest();
            return getCafe1Scene();
        }
    }
}