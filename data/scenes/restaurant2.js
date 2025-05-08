import { state } from "../../script.js";
import { getRestaurant3Scene } from "./restaurant3.js";

export function getRestaurant2Scene() {

    return {
        id: "restaurant2",
        background_img: "assets/images/restaurantMainBg.png",
        narration: "",
        lines: [
            { speaker: `👨‍🍳 Serveur`, text: "Bonjour ! Vous êtes combien ?", personImg: "assets/images/restaurantPerson1.png" },
            { speaker: `👤 ${state.userName}`, text: "Oui, bonjour. Une personne.", personImg: "assets/images/restaurantPerson1.png" },
            { speaker: `👨‍🍳 Serveur`, text: "D'accord. Une table pour une personne. Suivez-moi, s'il vous plaît.", personImg: "assets/images/restaurantPerson1.png" },
            { speaker: ``, text: "직원 분을 따라 자리를 잡았다.", personImg: "assets/images/restaurantPerson1.png" },
            { speaker: `👨‍🍳 Serveur`, text: "Voilà, le menu.", personImg: "assets/images/restaurantPerson1.png", overlayImg: "assets/images/restaurantMenu.png" },
            { speaker: `👨‍🍳 Serveur`, text: "Nous avons le temps de choisir, ne vous pressez pas.", personImg: "assets/images/restaurantPerson1.png", overlayImg: "assets/images/restaurantMenu.png" },
            { speaker: `👤 ${state.userName}`, text: "Oui, merci.", personImg: "assets/images/restaurantPerson1.png", overlayImg: "assets/images/restaurantMenu.png" },
            { speaker: `👤 ${state.userName}`, text: "메뉴판을 보고 먹고 싶은 메뉴를 고민해보자.", overlayImg: "assets/images/restaurantMenu.png" },
            { speaker: `👤 ${state.userName}`, text: "음... 그런데 여기 있는 'salade niçoise'가 뭐지?", overlayImg: "assets/images/restaurantMenu.png" },
            { speaker: `👤 ${state.userName}`, text: "직원 분께 여쭤보자." },
            { speaker: `👤 ${state.userName}`, text: "그런데 어떻게 불러야 하지?" },
            { speaker: ``, text: ``,
                choices: {
                    prompt: "어떻게 하면 좋을까?",
                    options: [
                        {
                            label: "직원을 조용히 쳐다보기만 하기",
                            scoreDelta: 0,
                            insertLines: [
                                { speaker: `👤 ${state.userName}`, text: `...` },
                                { speaker: ``, text: `필사적으로 직원 분과 눈을 마주치기 위해 노력했다.` },
                                { speaker: ``, text: `나와 눈이 마주친 직원 분이 나에게로 다가왔다.` },
                                { speaker: `👨‍🍳 Serveur`, text: "Avez-vous fini de choisir votre plat ?", personImg: "assets/images/restaurantPerson1.png" },
                            ],
                        },
                        {
                            label: `작게 "S'il vous plaît"라고 말하기`,
                            scoreDelta: 0,
                            insertLines: [
                                { speaker: `👤 ${state.userName}`, text: `S'il vous plaît.` },
                                { speaker: ``, text: `나의 목소리를 들은 직원 분이 나에게로 다가왔다.` },
                                { speaker: `👨‍🍳 Serveur`, text: "Avez-vous fini de choisir votre plat ?", personImg: "assets/images/restaurantPerson1.png" },
                            ],
                        },
                        {
                            label: "직원을 큰 목소리로 부르기",
                            scoreDelta: 0,
                            insertLines: [
                                { speaker: `👤 ${state.userName}`, text: `Excusez-moi !` },
                                { speaker: `👨‍🍳 Serveur`, text: "...", personImg: "assets/images/restaurantPerson1.png" },
                                { speaker: `👨‍🍳 Serveur`, text: "......", personImg: "assets/images/restaurantPerson1.png" },
                                { speaker: ``, text: `... 싸늘하다.`, personImg: "assets/images/restaurantPerson1.png" },
                                { speaker: `👨‍🍳 Serveur`, text: "... Avez-vous fini de choisir votre plat ?", personImg: "assets/images/restaurantPerson1.png" },
                            ],
                        }
                    ]
                }
            },
            { speaker: `👤 ${state.userName}`, text: "Oui, mais j'ai une question.", personImg: "assets/images/restaurantPerson1.png" },
            { speaker: `👤 ${state.userName}`, text: "Une salade niçoise, qu'est-ce que c'est ?", personImg: "assets/images/restaurantPerson1.png" },
            { speaker: `👨‍🍳 Serveur`, text: "Bien sûr ! La salade niçoise est une salade traditionnelle du sud de la France.", personImg: "assets/images/restaurantPerson1.png", overlayImg: "assets/images/salade-nicoise.jpg" },
            { speaker: `👨‍🍳 Serveur`, text: "Elle contient généralement des tomates, des œufs durs, du thon, des olives, des haricots verts et des pommes de terre.", personImg: "assets/images/restaurantPerson1.png", overlayImg: "assets/images/salade-nicoise.jpg" },
            { speaker: `👨‍🍳 Serveur`, text: "C'est une salade fraîche et très complète.", personImg: "assets/images/restaurantPerson1.png", overlayImg: "assets/images/salade-nicoise.jpg" },
            { speaker: `👤 ${state.userName}`, text: "Merci beaucoup !", personImg: "assets/images/restaurantPerson1.png" },
            { speaker: `👨‍🍳 Serveur`, text: "Alors, qu'est-ce que vous voulez ?", personImg: "assets/images/restaurantPerson1.png" },
            { speaker: `👤 ${state.userName}`, text: "J'ai envie de manger ...", personImg: "assets/images/restaurantPerson1.png" },
            { speaker: ``, text: ``,
                choices: {
                    prompt: "뭘 먹어볼까?",
                    options: [
                        {
                            label: "Des pâtes - 8,00 €",
                            scoreDelta: 0,
                            insertLines: [
                                { speaker: `👤 ${state.userName}`, text: "J'ai envie de manger des pâtes, s'il vous plaît.", personImg: "assets/images/restaurantPerson1.png" },
                            ],
                            customAction: () => {
                                state.selectedDish = {
                                    name: "des pâtes",
                                    price: 8,
                                    image: "assets/images/pates.jpg"
                                };
                            }
                        },
                        {
                            label: "Un steak-frites - 12,00 €",
                            scoreDelta: 0,
                            insertLines: [
                                { speaker: `👤 ${state.userName}`, text: "J'ai envie de manger un steak-frites, s'il vous plaît.", personImg: "assets/images/restaurantPerson1.png" },
                            ],
                            customAction: () => {
                                state.selectedDish = {
                                    name: "un steak-frites",
                                    price: 12,
                                    image: "assets/images/steak-frites.jpg"
                                };
                            }
                        },
                        {
                            label: "Une salade niçoise - 7,00 €",
                            scoreDelta: 0,
                            insertLines: [
                                { speaker: `👤 ${state.userName}`, text: "J'ai envie de manger une salade niçoise, s'il vous plaît.", personImg: "assets/images/restaurantPerson1.png" },
                            ],
                            customAction: () => {
                                state.selectedDish = {
                                    name: "une salade niçoise",
                                    price: 7,
                                    image: "assets/images/salade-nicoise.jpg"
                                };
                            } 
                        },
                        {
                            label: "Une pizza - 9,00 €",
                            scoreDelta: 0,
                            insertLines: [
                                { speaker: `👤 ${state.userName}`, text: "J'ai envie de manger une pizza, s'il vous plaît.", personImg: "assets/images/restaurantPerson1.png" },
                            ],
                            customAction: () => {
                                state.selectedDish = {
                                    name: "une pizza",
                                    price: 9,
                                    image: "assets/images/pizza.jpg"
                                };
                            }
                        },
                    ]
                }
            },
            { speaker: `👨‍🍳 Serveur`, text: "Très bien. C'est tout ?", personImg: "assets/images/restaurantPerson1.png" },
            { speaker: `👤 ${state.userName}`, text: "Oui, c'est tout.", personImg: "assets/images/restaurantPerson1.png" },
            { speaker: `👨‍🍳 Serveur`, text: "D'accord. Attendez un peu, s'il vous plaît.", personImg: "assets/images/restaurantPerson1.png" },
            { speaker: `👨‍🍳 Serveur`, text: "Je vais vous apporter un peu de pain en plus.", personImg: "assets/images/restaurantPerson1.png" },
        ],

        nextScene: () => {
            return getRestaurant3Scene();
        }
    }
}