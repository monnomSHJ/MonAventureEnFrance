import { state } from "../../script.js";

export function getStrasbourg2Scene() {

    return {
        id: "strasbourg2",
        background_img: "assets/imgaes/strasbourgStreet.png",
        narration: "",
        lines: [

        ],

        nextScene: () => {
            console.log('dd');
        }
    }
}