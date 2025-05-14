import { state } from "../../script.js";
import { getLyon2Scene } from "./lyon2.js";

export function getLyon2bScene() {

    return {
        id: "lyon2b",
        background_img: "assets/images/miniatureBg.jpg",
        narration: "",
        lines: [

        ],

        nextScene: () => {
            return getLyon2Scene()
        }
    }
}