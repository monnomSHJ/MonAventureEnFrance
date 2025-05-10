import { state } from "../../script.js";
import { getCafe4Scene } from "./cafe4.js";

export function getCafe3Scene() {

    return {
        id: "cafe3",
        background_img: "assets/images/cafeMain.jpg",
        narration: "",
        retryLines: [],
        lines: [
            { speaker: `👤 ${state.userName}`, text: `정말 즐거운 시간이었다.` },
            { speaker: `👤 ${state.userName}`, text: `이제 다른 곳으로 이동해볼까...` },
            { speaker: `👤 ${state.userName}`, text: `...` },
            { speaker: `👤 ${state.userName}`, text: `......!!!` },
            { speaker: `👤 ${state.userName}`, text: `내가 들고다니던 작은 가방 하나가 사라졌다...!!!` },
            { speaker: `👤 ${state.userName}`, text: `울랄라... 어디서 잃어버린거지? 기억을 더듬어보자.` },
            { speaker: `👤 ${state.userName}`, text: `... 식당에서 나올 때 그대로 두고 온 것 같다.` },
            { speaker: `👤 ${state.userName}`, text: `식당으로 다시 돌아가보자.` },
        ],

        nextScene: () => {
            return getCafe4Scene();
        }
    }
}