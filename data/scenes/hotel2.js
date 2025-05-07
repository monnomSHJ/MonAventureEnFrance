import { state } from "../../script.js";
import { getHotel3Scene } from "./hotel3.js";

export function getHotel2Scene() {

    return {
        id: "hotel2",
        background_img: "assets/images/hotelLobbyMain.jpg",
        narration: "",
        retryLines: [],
        lines: [
            { speaker: ``, text: `보증금 50유로를 지불했다.`, personImg: "assets/images/hotelPerson1.png" },
            { speaker: `👮 Réceptionniste`, text: `Vous êtes dans la chambre 305, au troisième étage.`, personImg: "assets/images/hotelPerson1.png" },
            { speaker: `👮 Réceptionniste`, text: `Le petit déjeuner est servi jusqu'à 9 heures,`, personImg: "assets/images/hotelPerson1.png" },
            { speaker: `👮 Réceptionniste`, text: `et le départ doit se fait avant 11 heures.`, personImg: "assets/images/hotelPerson1.png" },
            { speaker: `👮 Réceptionniste`, text: `Le restaurant est au deuxième étage, et il y a un salon au cinquième étage.`, personImg: "assets/images/hotelPerson1.png" },
            { speaker: `👮 Réceptionniste`, text: `Et n'oubliez pas : pas de bruit après 22 heueres.`, personImg: "assets/images/hotelPerson1.png" },
            { speaker: `👮 Réceptionniste`, text: `Vous voulez que je vous explique encore une fois ?`, personImg: "assets/images/hotelPerson1.png" },
            { speaker: ``, text: `한 번 더 설명해달라고 부탁할까?`, personImg: "assets/images/hotelPerson1.png" },
            { speaker: ``, text: ``, personImg: "assets/images/hotelPerson1.png",
                choices: {
                    prompt: "한 번 더 설명해달라고 부탁할까?",
                    options: [
                        {
                            label: "아니요",
                            insertLines: [
                                { speaker: `👤 ${state.userName}`, text: `Non, merci.`, personImg: "assets/images/hotelPerson1.png" }
                            ]

                        },
                        {
                            label: "예",
                            insertLines: [
                                { speaker: `👤 ${state.userName}`, text: `Oui, encore une fois, s'il vous plaît.`, personImg: "assets/images/hotelPerson1.png" },
                                { speaker: `👮 Réceptionniste`, text: `Vous êtes dans la chambre 305, au troisième étage.`, personImg: "assets/images/hotelPerson1.png" },
                                { speaker: `👮 Réceptionniste`, text: `Le petit déjeuner est servi jusqu'à 9 heures,`, personImg: "assets/images/hotelPerson1.png" },
                                { speaker: `👮 Réceptionniste`, text: `et le départ doit se fait avant 11 heures.`, personImg: "assets/images/hotelPerson1.png" },
                                { speaker: `👮 Réceptionniste`, text: `Le restaurant est au deuxième étage, et il y a un salon au cinquième étage.`, personImg: "assets/images/hotelPerson1.png" },
                                { speaker: `👮 Réceptionniste`, text: `Et n'oubliez pas : pas de bruit après 22 heueres.`, personImg: "assets/images/hotelPerson1.png" },
                                { speaker: `👤 ${state.userName}`, text: `Merci beaucoup !`, personImg: "assets/images/hotelPerson1.png" },
                            ]
                        }
                    ]
                }
             },
             { speaker: ``, text: `이제 내 방을 찾아가보자.`, personImg: "assets/images/hotelPerson1.png" },
        ],

        nextScene: () => {
            return getHotel3Scene();
        }
    }
}