import { state } from "../../script.js";
import { renderQuest, renderStatusBar } from "../../statusBar.js";
import { getToilet3Scene } from "./toilet3.js";

export function getToilet2Scene() {

    return {
        id: "toilet2",
        background_img: "assets/images/publicToilets.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `공중화장실을 찾았다.` },
            { speaker: `👤 ${state.userName}`, text: `...어라?` },
            { speaker: `👤 ${state.userName}`, text: `공중화장실을 사용하려면 돈을 내야 한다고?`, overlayImg: `assets/images/toiletsOverlay.png` },
            { speaker: `👤 ${state.userName}`, text: `화장실 쓰는데 돈을 내야 하나?!`, overlayImg: `assets/images/toiletsOverlay.png` },
            { speaker: `👤 ${state.userName}`, text: `아! 생각해보니...`, overlayImg: `assets/images/toiletsOverlay.png` },
            { speaker: `👤 ${state.userName}`, text: `예전에 인스타그램에서 본 적이 있는 것 같아.`, overlayImg: `assets/images/toiletsInstagram.png` },  
            { speaker: `👤 ${state.userName}`, text: `프랑스에선 시설 유지 및 보수를 위해 화장실 요금을 받는다고 했지!`, overlayImg: `assets/images/toiletsInstagram.png` },
            { speaker: `👤 ${state.userName}`, text: `그래... 로마에서는 로마법을 따라야지.`, overlayImg: `assets/images/toiletsInstagram.png` }, 
        ],

        nextScene: () => {
            state.balance -= 1;
            renderStatusBar();
            state.currentQuest = "";
            renderQuest();
            return getToilet3Scene();
        }
    }
}