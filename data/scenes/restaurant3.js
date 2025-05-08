import { state } from "../../script.js";
import { getRestaurant4Scene } from "./restaurant4.js";

export function getRestaurant3Scene() {

    const dish = state.selectedDish || {
        name: "quelque chose",
        price: 0,
        image: ""
    };

    return {
        id: "restaurant3",
        background_img: "assets/images/restaurantMainBg.png",
        narration: "",
        lines: [
            { speaker: `👨‍🍳 Serveur`, text: `Voilà, ${dish.name}.`, personImg: "assets/images/restaurantPerson1.png" },
            { speaker: ``, text: `기다리고 기다리던 식사 시간이다!`, personImg: "assets/images/restaurantPerson1.png", overlayImg: dish.image },
            { speaker: `👤 ${state.userName}`, text: "Merci beaucoup !",  personImg: "assets/images/restaurantPerson1.png", overlayImg: dish.image },
            { speaker: `📢`, text: "이야. 정말 맛있어 보이는데요.", overlayImg: `${dish.image}` },
            { speaker: `📢`, text: "식사하면서 프랑스 식당 예절에 대해 간단히 이야기해볼까요?", overlayImg: `${dish.image}` },
            { speaker: `📢`, text: "식당에 들어갔을 때, 한국에서처럼 원하는 자리에 바로 착석하는 것은 무례한 행동으로 보일 수 있습니다.", overlayImg: `assets/images/restaurantOverlay.png` },
            { speaker: `📢`, text: "식당에 들어가서 웨이터에게 인원수를 말하면, 웨이터가 적당한 자리로 안내해줄 겁니다.", overlayImg: `assets/images/restaurantOverlay.png` },
            { speaker: `📢`, text: "이 웨이터는 대체로 주문에서부터 계산까지 여러분을 담당하기 때문에, 다른 웨이터에게 서비스를 요청하지 않도록 유의하는 것이 좋습니다.", overlayImg: `assets/images/restaurantOverlay.png` },
            { speaker: `📢`, text: "또한 웨이터에게 요청 사항이 있을 경우, 큰 소리로 부르는 것은 상당히 무례한 행동으로 인식되기 때문에,", overlayImg: `assets/images/restaurantOverlay.png` },
            { speaker: `📢`, text: "필요한 게 있다면 웨이터와 눈을 마주치고 살짝 손을 들거나,", overlayImg: `assets/images/restaurantOverlay.png` },
            { speaker: `📢`, text: "웨이터가 지나갈 때 작은 목소리로 부르는 것이 좋습니다.", overlayImg: `assets/images/restaurantOverlay.png` },
            { speaker: `📢`, text: "프랑스에서 식당을 방문할 때 꼭 유의하시길 바랍니다!", overlayImg: `assets/images/restaurantOverlay.png` },
        ],
        
        nextScene: () => {
            return getRestaurant4Scene();
        }
    }
}