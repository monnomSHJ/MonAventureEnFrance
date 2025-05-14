import { state } from "../../script.js";
import { getLyon2aScene } from "./lyon2a.js";
import { getLyon2bScene } from "./lyon2b.js";
import { getLyon2cScene } from "./lyon2c.js";
import { getLyon3Scene } from "./lyon3.js";

export function getLyon2Scene() {

    const destinations = {
        "Musée Cinéma et Miniature": getLyon2aScene,
        "Basilique Notre-dame de Fourvière": getLyon2bScene,
        "Parc de la Tête d'Or": getLyon2cScene
    };

    function makeOptions() {
        return Object.keys(destinations).map(label => ({
            label,
            insertLines: [
                { speaker: `👤 ${state.userName}`, text: `${label}에 가보자.` },
                makeFollowupLines()
            ],
            customAction: () => {
                state.visitedLyonSpots.add(label);
                state.nextScene = destinations[label]();
            },
            disabled: state.visitedLyonSpots.has(label)
        }));
    };

    function makeFollowupLines() {
        if (state.visitedLyonSpots.size < 3) {
            return [{
                speaker: ``,
                text: ``,
                showChoiceAgain: true,
                choices: {
                    prompt: "다음으로 어디를 가볼까?",
                    options: () => makeOptions()
                }
            }];
        } else {
            return [{
                speaker: `👤 ${state.userName}`,
                text: `리옹에서 가보고 싶은 곳을 모두 다녀왔다.`,
                nextScene: () => getLyon3Scene()
            }];
        }
    }

    return {
        id: "lyon2",
        background_img: "assets/images/lyonStreet.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `리옹에 도착했다!` },
            { speaker: `👤 ${state.userName}`, text: `마침 날씨도 너무 좋은데?` },
            { speaker: `👤 ${state.userName}`, text: `참, 오는 길에 인터넷에서 리옹에서 가볼 만한 곳들을 찾아보았는데...` },
            { speaker: `👤 ${state.userName}`, text: `어디로 가볼까?` },
            { speaker: ``, text: ``,
                choices: {
                    prompt: `어디로 가볼까?`,
                    options: () => makeOptions()
                }
            }
        ],

        nextScene: () => {
            state.nextScene || getLyon3Scene();
            state.nextScene = null;
            return next;
        }
    };
}