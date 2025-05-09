import { state } from "../../script.js";
import { renderQuest } from "../../statusBar.js";
import { getCafe3Scene } from "./cafe3.js";

export function getCafe2Scene() {

    const cafe = state.selectedCafe || {
        name: "quelque chose",
        price: 0,
        image: ""
    };


    return {
        id: "cafe2",
        background_img: "assets/images/cafeMain.jpg",
        narration: "",
        retryLines: [],
        lines: [
            { speaker: ``, text: `${cafe.price} 유로를 지불했다.`, personImg: "assets/images/cafePerson1.png" },
            { speaker: `📢`, text: `${cafe.price} 점이 추가되었습니다.`, personImg: "assets/images/cafePerson1.png" },
            { speaker: `👤 ${state.userName}`, text: `주문한 게 나올 때까지 자리에 앉아 카페 내부를 구경해야겠다.` },
            { speaker: `👤 ${state.userName}`, text: `그러고보니 아까 식당 직원 분이 이 카페에 대해 설명해주셨지.` },
            { speaker: `👤 ${state.userName}`, text: `역사적으로도, 문화적으로도 굉장히 상징적인 장소인 것 같다.` },
            { speaker: `👩‍🍳 Serveuse`, text: `Voilà, ${cafe.name}.`, personImg: "assets/images/cafePerson1.png", overlayImg: `${cafe.image}` },
            { speaker: `👤 ${state.userName}`, text: `Merci Beaucoup !`, personImg: "assets/images/cafePerson1.png", overlayImg: `${cafe.image}` },
            { speaker: ``, text: `시간은 많으니까 여유롭게 즐기다 가자.`, overlayImg: `${cafe.image}` },
        ],

        nextScene: () => {
            state.currentQuest = "";
            renderQuest();
            return getCafe3Scene();
        }
    }
}