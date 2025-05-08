import { state } from "../../script.js";

export function getRestaurant3Scene() {

    return {
        id: "restaurant3",
        background_img: "assets/images/restaurantMainBg.png",
        narration: "",
        lines: [],
        nextScene: () => {
            console.log('dd');
        }
    }
}