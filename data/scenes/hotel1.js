import { state } from "../../script.js";
import { renderStatusBar } from "../../statusBar.js";
import { getHotel2Scene } from "./hotel2.js";

export function getHotel1Scene() {

    return {
        id: "hotel1",
        background_img: "assets/images/hotelLobbyMain.jpg",
        narration: "",
        retryLines: [],
        lines: [
            { speaker: `👤 ${state.userName}`, text: `호텔 로비에 도착했다.` },
            { speaker: `👤 ${state.userName}`, text: `프론트에 가서 체크인을 해야겠지?` },
            { speaker: `👤 ${state.userName}`, text: `프론트로 가보자.` },
            { speaker: `👮 Réceptionniste`, text: `Bonjour ! Avez-vous une réservation ?`, personImg: "assets/images/hotelPerson1.png" },
            { speaker: `👤 ${state.userName}`, text: `Oui. Je m'appelle ${state.userName}.`,personImg: "assets/images/hotelPerson1.png" },
            { speaker: `👮 Réceptionniste`, text: `Merci. Je vais vérifier... Et votre passeport, s'il vous plaît ?`, personImg: "assets/images/hotelPerson1.png"},
            { speaker: `👤 ${state.userName}`, text: `Voici mon passeport.`, personImg: "assets/images/hotelPerson1.png" },
            { speaker: ``, text: `호텔 직원에게 여권을 건넸다.`, personImg: "assets/images/hotelPerson1.png" },
            { speaker: `👮 Réceptionniste`, text: `Très bien. Il y a un dépot de garantie de 50 euros. Il sera remboursé au moment du départ.`, personImg: "assets/images/hotelPerson1.png"},
            { speaker: `👤 ${state.userName}`, text: `D'accord. Pas de problème.`, personImg: "assets/images/hotelPerson1.png" },
        ],
        
        nextScene: () => {
            state.balance -= 50;
            renderStatusBar();
            return getHotel2Scene();
        }
    }
}