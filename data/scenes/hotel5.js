import { state } from "../../script.js";
import { getRestaurant1Scene } from "./restaurant1.js";

export function getHotel5Scene() {

    return {
        id: "hotel5",
        background_img: "assets/images/hotelLobbyMain.jpg",
        narration: "",
        retryLines: [],
        lines: [
            { speaker: `👤 ${state.userName}`, text: `일단 방에서 나오긴 했는데... 어디에 가야 할지를 모르겠네.` },
            { speaker: `👤 ${state.userName}`, text: `아직 아무 것도 못 먹었으니 식당에 가볼까?` },
            { speaker: `👤 ${state.userName}`, text: `아까 그 직원 분께 주변 식당을 추천받아 보자.` },
            { speaker: `👤 ${state.userName}`, text: `Excusez-moi.` },
            { speaker: `👮 Réceptionniste`, text: `Oui, vous avez besoin d'aide ?`, personImg: "assets/images/hotelPerson1.png" },
            { speaker: `👤 ${state.userName}`, text: `J'ai du mal à choisir quel restaurant visiter en ce moment.`, personImg: "assets/images/hotelPerson1.png" },
            { speaker: `👤 ${state.userName}`, text: `Connaissez-vous un bon restaurant près d'ici ?`, personImg: "assets/images/hotelPerson1.png" },
            { speaker: `👮 Réceptionniste`, text: `Bien sûr ! Il y a un bon restaurant près d'ici. Très apprécié par les locaux !`, personImg: "assets/images/hotelPerson1.png" },
            { speaker: `👤 ${state.userName}`, text: `Où se trouve le restaurant ?`, personImg: "assets/images/hotelPerson1.png" },
            { speaker: `👮 Réceptionniste`, text: `Pour aller au restaurant, sortez de l'hôtel, puis tournez à gauche.`, personImg: "assets/images/hotelPerson1.png" },
            { speaker: `👮 Réceptionniste`, text: `Continuez tout droit et tournez à droite à la pharmacie.`, personImg: "assets/images/hotelPerson1.png" },
            { speaker: `👮 Réceptionniste`, text: `Le restaurant se trouve à côté du Café de Flore.`, personImg: "assets/images/hotelPerson1.png" },
            { speaker: `👮 Réceptionniste`, text: `Comme vous parlez français, si jamais vous avez du mal à trouver votre chemin,`, personImg: "assets/images/hotelPerson1.png" },
            { speaker: `👮 Réceptionniste`, text: `n'hésitez pas à demander de l'aide aux passants. Ils seront ravis de vous aider.`, personImg: "assets/images/hotelPerson1.png" },
            { speaker: `👤 ${state.userName}`, text: `Merci beaucoup !`, personImg: "assets/images/hotelPerson1.png" },
            { speaker: `👮 Réceptionniste`, text: `Avec plaisir. Bonne journée !`, personImg: "assets/images/hotelPerson1.png" },
        ],
        
        nextScene: () => {
            return getRestaurant1Scene();
        }
    }
}