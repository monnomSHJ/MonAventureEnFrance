import { state } from "../../script.js";

export function getBordeaux2Scene() {

    return {
        id: "bordeaux2",
        background_img: "assets/imgaes/bordeauxStreet.png",
        narration: "",
        lines: [

        ],

        nextScene: () => {
            console.log('dd');
        }
    }
}