import { state } from "../../script.js";

export function getEiffelTower2Scene() {

    return {
        id: "eiffelTower2",
        background_img: "assets/images/eiffel-tower.jpg",
        narration: "",
        retryLines: [
            { speaker: `👤 ???`, text: "Pardon ?", personImg: "assets/images/eiffelTowerPerson1.png"},
            { speaker: `👤 ${state.userName}`, text: ".. 다시 한 번 시도해보자.", personImg: "assets/images/eiffelTowerPerson1.png"},
            { speaker: `📢`, text: "1점이 차감되었습니다.", personImg: "assets/images/eiffelTowerPerson1.png"}
        ],
        lines: [
            { speaker: `👤 ${state.userName}`, text: "인생샷 몇 장 건졌다. 나중에 인스타에 올려야지." },
            { speaker: `👤 ${state.userName}`, text: "인생샷 몇 장 건졌다. 나중에 인스타에 올려야지." },
        ],

        nextScene: () => {
            console.log('d');
        }
    }

}

