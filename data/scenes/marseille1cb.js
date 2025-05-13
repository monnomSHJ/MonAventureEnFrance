import { state } from "../../script.js";
import { getMarseille1ccScene } from "./marseille1cc.js";

export function getMarseille1cbScene() {

    return {
        id: "marseille1cb",
        background_img: "assets/images/airportMain.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `공항에 도착했다!` },
            { speaker: `👤 ${state.userName}`, text: `어디에서 탑승해야 하는지 직원분께 여쭤봐야겠다.` },
            { speaker: `👤 ${state.userName}`, text: `Bonjour, je voudrais aller à Marseille.` },
            { speaker: `👤 Employée`, text: `D'accord. Vous devez aller à la porte numéro douze.`, personImg: `assets/images/garePerson1.png` },
            { speaker: `👤 ${state.userName}`, text: `Merci beaucoup.`, personImg: `assets/images/garePerson1.png` },
            { speaker: `👤 Employée`, text: `Avec plaisir. Bon voyage !`, personImg: `assets/images/garePerson1.png` },
            { speaker: `👤 ${state.userName}`, text: `알맞은 탑승구로 가보자.` },
            { speaker: ``, text: ``, 
                choices: {
                    prompt: "어디로 가야 하지?",
                    options: [
                       {
                            label: "11번 탑승구",
                            scoreDelta: -1,
                            insertLines: [
                                { speaker: `📢`, text: "길을 잘못 든 것 같습니다. 다시 처음 위치로 되돌아 와야 했습니다." },
                                { speaker: `📢`, text: "1점이 차감되었습니다." },
                                { speaker: ``, text: ``, showChoiceAgain: true }
                            ],
                        },
                                               {
                            label: "12번 탑승구",
                            scoreDelta: 3,
                            insertLines: [
                                { speaker: `📢`, text: "올바른 플랫폼에 찾아왔습니다!" },
                                { speaker: `📢`, text: "3점이 추가되었습니다." },
                            ],
                        },
                                               {
                            label: "13번 탑승구",
                            scoreDelta: -1,
                            insertLines: [
                                { speaker: `📢`, text: "길을 잘못 든 것 같습니다. 다시 처음 위치로 되돌아 와야 했습니다." },
                                { speaker: `📢`, text: "1점이 차감되었습니다." },
                                { speaker: ``, text: ``, showChoiceAgain: true }
                            ],
                        },
                                               {
                            label: "20번 탑승구",
                            scoreDelta: -1,
                            insertLines: [
                                { speaker: `📢`, text: "길을 잘못 든 것 같습니다. 다시 처음 위치로 되돌아 와야 했습니다." },
                                { speaker: `📢`, text: "1점이 차감되었습니다." },
                                { speaker: ``, text: ``, showChoiceAgain: true }
                            ],
                        },
                    ]
                }
            },
            { speaker: `👤 ${state.userName}`, text: `탑승 시간이 될 때까지 잠시만 기다리자.` },
        ],

        nextScene: () => {
            return getMarseille1ccScene();
        }
    }
}