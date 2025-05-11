import { state } from "../../script.js";

export function getLouvre3Scene() {

    return {
        id: "louvre2",
        background_img: "assets/images/museeDuLouvreInside.jpg",
        narration: "",
        lines: [

        ],

        nextScene: () => {
            console.log('dd');
        }
    }
}