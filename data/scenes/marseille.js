import { state } from "../../script.js";

export function getMarSeille1Scene() {

    return {
        id: "marseille1",
        background_img: "assets/images/hotelRoomBg.jpg",
        narration: "",
        lines: [

        ],

        nextScene: () => {
            console.log('dd');
        }
    }
}