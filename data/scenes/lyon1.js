import { state } from "../../script.js";

export function getLyon1Scene() {

    return {
        id: "lyon1",
        background_img: "assets/images/hotelRoomBg.jpg",
        narration: "",
        lines: [

        ],

        nextScene: () => {
            console.log('dd');
        }
    }
}