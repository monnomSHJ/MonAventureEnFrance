import { state } from "../../script.js";

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
            { speaker: `👮 Réceptionniste`, text: `Bonjour !` },
        ],
        
        nextScene: () => {
            console.log("우라랄")
        }
    }
}