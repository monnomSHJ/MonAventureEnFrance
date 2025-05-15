import { state } from "../../script.js";
import { getStrasbourg1bcScene } from "./strasbourg1bc.js";

export function getStrasbourg1bbScene() {
    
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
            wrongPlatform("11번 플랫폼"),
            {
                label: "12번 플랫폼",
                scoreDelta: 3,
                insertLines: [
                    { speaker: `📢`, text: "올바른 플랫폼에 찾아왔습니다!" },
                    { speaker: `📢`, text: "3점이 추가되었습니다." },
                ]
            },
            wrongPlatform("13번 플랫폼"),
            wrongPlatform("20번 플랫폼"),
        ]
    }

    return {
        id: "strasbourg1bb",
        background_img: "assets/images/bercySeineBusStation.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `정류장에 도착했다!` },
            { speaker: `👤 ${state.userName}`, text: `정말 시끌벅적 한데?` },
            { speaker: `👤 ${state.userName}`, text: `어디에서 탑승해야 하는지 직원분께 여쭤봐야겠다.` },
            { speaker: `👤 ${state.userName}`, text: `Bonjour, je voudrais aller à Strasbourg.` },
            { speaker: `👤 Employée`, text: `D'accord. Vous devez aller au quai numéro douze.`, personImg: `assets/images/garePerson1.png` },
            { speaker: `👤 ${state.userName}`, text: `Merci beaucoup.`, personImg: `assets/images/garePerson1.png` },
            { speaker: `👤 Employée`, text: `Avec plaisir. Bon voyage !`, personImg: `assets/images/garePerson1.png` },
            { speaker: `👤 ${state.userName}`, text: `알맞은 플랫폼으로 가보자.` },
            { speaker: ``, text: ``, 
                choices: {
                    prompt: "어디로 가야 하지?",
                    options: () => makePlatformOptions()
                }
            },
            { speaker: `👤 ${state.userName}`, text: `버스가 올 때까지 조금만 기다리자.` },
        ],

        nextScene: () => {
            return getStrasbourg1bcScene();
        }
    }
}