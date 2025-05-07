import { state } from "../../script.js";

export function getHotel4Scene() {

    return {
        id: "hotel1",
        background_img: "assets/images/hotelLobbyMain.jpg",
        narration: "",
        retryLines: [],
        lines: [
            { speaker: `👤 ${state.userName}`, text: `호텔 로비에 도착했다.` },
        ],
        
        nextScene: () => {
            console.log('dd')
        }
    }
}