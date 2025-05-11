import { state } from "../../script.js";
import { renderQuest } from "../../statusBar.js";
import { getLouvre1Scene } from "./louvre1.js";

export function getEiffelTower2Scene() {

    return {
        id: "eiffelTower2",
        background_img: "assets/images/eiffel-tower.jpg",
        narration: "",
        retryLines: [
        ],
        lines: [
            { speaker: `👤 ${state.userName}`, text: "인생샷 몇 장 건졌다. 나중에 인스타에 올려야지." },
            { speaker: `👤 ???`, text: `Où allez-vous maintenant ?`, personImg: `assets/images/eiffelTowerPerson1.png` },
            { speaker: `👤 ${state.userName}`, text: "Vous pouvez me recommander un musée célèbre près d'ici ?", personImg: `assets/images/eiffelTowerPerson1.png` },
            { speaker: `👤 ???`, text: `Bien sûr !`, personImg: `assets/images/eiffelTowerPerson1.png` },
            { speaker: `👤 ???`, text: `Le musée du Louvre est l'un des plus célèbres du monde.`, personImg: `assets/images/eiffelTowerPerson1.png` },
            { speaker: `👤 ${state.userName}`, text: "Comment puis-je aller au musée du Louvre ?", personImg: `assets/images/eiffelTowerPerson1.png` },
            { speaker: `👤 ???`, text: `Pour y aller, prenez le bus 72 à l'arrêt Pont d'Iéna.`, personImg: `assets/images/eiffelTowerPerson1.png` },
            { speaker: `👤 ???`, text: `Descendez à l'arrêt Quai François Mitterrand.`, personImg: `assets/images/eiffelTowerPerson1.png` },
            { speaker: `👤 ???`, text: `Le musée du Louvre est à 5 minutes à pied.`, personImg: `assets/images/eiffelTowerPerson1.png` },
            { speaker: `👤 ${state.userName}`, text: "Merci beaucoup !", personImg: `assets/images/eiffelTowerPerson1.png` },
            { speaker: `👤 ???`, text: `Je vous en prie !`, personImg: `assets/images/eiffelTowerPerson1.png` },
        ],

        nextScene: () => {
            state.currentQuest = "박물관";
            renderQuest();
            return getLouvre1Scene();
        }
    }
}

