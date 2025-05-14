import { state } from "../../script.js";
import { getLyon2Scene } from "./lyon2.js";

export function getLyon2aScene() {

    return {
        id: "lyon2a",
        background_img: "assets/images/miniatureBg.jpg",
        narration: "",
        lines: [

        ],

        nextScene: () => {
            return getLyon2Scene()
        }
    }
}