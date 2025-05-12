import { state } from "../../script.js";

export function getToilet2Scene() {

    return {
        id: "toilet2",
        background_img: "assets/images/parisMainStreet.jpg",
        narration: "",
        lines: [
            
        ],

        nextScene: () => {
            console.log('dd');
        }
    }
}