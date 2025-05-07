import { state } from "../../script.js";

export function getHotel5Scene() {

    return {
        id: "hotel5",
        background_img: "assets/images/hotelLobbyMain.jpg",
        narration: "",
        retryLines: [],
        lines: [
            { speaker: `👤 ${state.userName}`, text: `일단 방에서 나오긴 했는데... 어디에 가야 할지를 모르겠네.` },
            { speaker: `👤 ${state.userName}`, text: `아까 그 직원 분께 어디로 갈지 추천을 받아볼까?` },
            { speaker: `👤 ${state.userName}`, text: `Excusez-moi.` },
            { speaker: `👮 Réceptionniste`, text: `Oui, vous avez besoin d'aide ?`, personImg: "assets/images/hotelPerson1.png" },
            { speaker: `👤 ${state.userName}`, text: `J'ai du mal à choisir quel endroit visiter en ce moment.`, personImg: "assets/images/hotelPerson1.png" },
            { speaker: `👤 ${state.userName}`, text: `Connaissez-vous...`, personImg: "assets/images/hotelPerson1.png" },
            { speaker: ``, text: `어떤 곳을 추천해달라고 부탁할까?`, personImg: "assets/images/hotelPerson1.png" },
            
            
        ],
        
        nextScene: () => {
            console.log('ad');
        }
    }
}