import { state } from "../../script.js";
import { renderStatusBar, renderQuest } from "../../statusBar.js";
import { getRestaurant5Scene } from "./restaurant5.js";

export function getRestaurant4Scene() {

    const dish = state.selectedDish || {
        name: "quelque chose",
        price: 0,
        image: ""
    };

    return {
        id: "restaurant4",
        background_img: "assets/images/restaurantMainBg.png",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: "정말이지 최고의 식사였어." },
            { speaker: `👤 ${state.userName}`, text: "이제 결제를 해볼까?" },
            { speaker: `👤 ${state.userName}`, text: "L'addition, s'il vous plaît." },
            { speaker: `👨‍🍳 Serveur`, text: `Vous payez comment ? Par carte ou en espèces ?`, personImg: "assets/images/restaurantPerson1.png" },
            { speaker: `👤 ${state.userName}`, text: `En espèces. s'il vous plaît.`, personImg: "assets/images/restaurantPerson1.png" },
            { speaker: `👨‍🍳 Serveur`, text: `D'accord. Ça coûte ${dish.price} euros.`, personImg: "assets/images/restaurantPerson1.png" },
            { speaker: `👤 ${state.userName}`, text: `D'accord.`, personImg: "assets/images/restaurantPerson1.png" },
        ],

        nextScene: () => {
            state.balance -= dish.price;
            state.score += dish.price;
            renderStatusBar();
            state.currentQuest = "";
            renderQuest();
            return getRestaurant5Scene();
        }
    }
}