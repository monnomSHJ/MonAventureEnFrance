import { state } from "../../script.js";

export function getHotel5Scene() {

    return {
        id: "hotel5",
        background_img: "assets/images/hotelLobbyMain.jpg",
        narration: "",
        retryLines: [],
        lines: [
            { speaker: `👤 ${state.userName}`, text: `호텔 로비에 도착했다.` }
        ],
        
        nextScene: () => {
            console.log('ad');
        }
    }
}