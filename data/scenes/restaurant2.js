import { state } from "../../script.js";

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
        ],

        nextScene: () => {
            console.log('dd');
        }
    }
}