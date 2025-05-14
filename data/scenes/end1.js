import { state } from "../../script.js";

export function getEnd1Scene() {

    return {
        id: "end1",
        background_img: "assets/images/miniatureBg.jpg",
        narration: "",
        lines: [

        ],

        nextScene: () => {
            console.log('dd');
        }
    }
}