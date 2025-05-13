import { state } from "../../script.js";

export function getStrasbourg1Scene() {

    return {
        id: "strasbourg1",
        background_img: "assets/images/hotelRoomBg.jpg",
        narration: "",
        lines: [

        ],

        nextScene: () => {
            console.log('dd');
        }
    }
}