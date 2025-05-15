import { state } from "../../script.js";
import { getLyon1ccScene } from "./lyon1cc.js";

export function getLyon1cbScene() {

    function makePlatformOptions() {
        const wrongPlatform = (label) => ({
            label,
            scoreDelta: -1,
            insertLines: [
                { speaker: `📢`, text: "길을 잘못 든 것 같습니다. 다시 처음 위치로 되돌아 와야 했습니다." },
                { speaker: `📢`, text: "1점이 차감되었습니다." },
                { speaker: "", text: " ", showChoiceAgain: true, 
                    choices: {
                        prompt: "어디로 가야 하지?",
                        options: () => makePlatformOptions()
                    }
                }
            ]
        });

        return [
            wrongPlatform("11번 탑승구"),
            {
                label: "12번 탑승구",
                scoreDelta: 3,
                insertLines: [
                    { speaker: `📢`, text: "올바른 탑승구에 찾아왔습니다!" },
                    { speaker: `📢`, text: "3점이 추가되었습니다." },
                ]
            },
            wrongPlatform("13번 탑승구"),
            wrongPlatform("20번 탑승구"),
        ]
    }

    return {
        id: "lyon1cb",
        background_img: "assets/images/airportMain.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `공항에 도착했다!` },
            { speaker: `👤 ${state.userName}`, text: `어디에서 탑승해야 하는지 직원분께 여쭤봐야겠다.` },
            { speaker: `👤 ${state.userName}`, text: `Bonjour, je voudrais aller à Lyon.` },
            { speaker: `👤 Employée`, text: `D'accord. Vous devez aller à la porte numéro douze.`, personImg: `assets/images/garePerson1.png` },
            { speaker: `👤 ${state.userName}`, text: `Merci beaucoup.`, personImg: `assets/images/garePerson1.png` },
            { speaker: `👤 Employée`, text: `Avec plaisir. Bon voyage !`, personImg: `assets/images/garePerson1.png` },
            { speaker: `👤 ${state.userName}`, text: `알맞은 탑승구로 가보자.` },
            { speaker: ``, text: ``, 
                choices: {
                    prompt: "어디로 가야 하지?",
                    options: () => makePlatformOptions()
                }
            },
            { speaker: `👤 ${state.userName}`, text: `탑승 시간이 될 때까지 잠시만 기다리자.` },
        ],

        nextScene: () => {
            return getLyon1ccScene();
        }
    }
}