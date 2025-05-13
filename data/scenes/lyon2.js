import { state } from "../../script.js";

export function getLyon2Scene() {

    return {
        id: "lyon2",
        background_img: "assets/imgaes/lyonStreet.png",
        narration: "",
        lines: [

        ],

        nextScene: () => {
            console.log('dd');
        }
    }
}