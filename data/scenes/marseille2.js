import { state } from "../../script.js";

export function getMarseille2Scene() {

    return {
        id: "marseille2",
        background_img: "assets/imgaes/marseilleStreet.png",
        narration: "",
        lines: [

        ],

        nextScene: () => {
            console.log('dd');
        }
    }
}