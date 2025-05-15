import { state } from "../../script.js";
import { getMarseille2aScene } from "./marseille2a.js";
import { getMarseille2bScene } from "./marseille2b.js";
import { getMarseille2cScene } from "./marseille2c.js";
import { getEnd1Scene } from "./end1.js";

export function getMarseille2Scene() {
    if (!state.visitedMarseilleSpots) {
        state.visitedMarseilleSpots = new Set();
    }

    const destinations = {
        "Musée des Civilisations de l'Europe et de la Méditerranée": getMarseille2aScene,
        "Basilique Notre-dame de la Garde": getMarseille2bScene,
        "Le Vieux-Port de Marseille": getMarseille2cScene
    };

    function makeOptions() {
        return Object.keys(destinations).map(label => ({
            label,
            insertLines: [
                { speaker: `👤 ${state.userName}`, text: `${label}에 가보자.` }
            ],
            customAction: () => {
                state.visitedMarseilleSpots.add(label);
                state.nextScene = destinations[label]();
            },
            disabled: state.visitedMarseilleSpots.has(label)
        }));
    };

    function insertIntroLineIfAllVisited() {
        if (state.visitedMarseilleSpots?.size === 3) {
            return [
                { speaker: `👤 ${state.userName}`, text: `마르세유에서 가보고 싶은 곳을 모두 다녀왔다.` },
                { speaker: `👤 ${state.userName}`, text: `이제 근처에서 저녁 식사라도 해야겠는 걸...` },
                { speaker: `👤 ${state.userName}`, text: `처음 프랑스에 올 때에는 모든 것들이 낯설고 두려울 거라고만 생각했는데,` },
                { speaker: `👤 ${state.userName}`, text: `막상 와서 부딪혀보니 생각보다 할 만하잖아?` },
                { speaker: `👤 ${state.userName}`, text: `열심히 프랑스어를 공부한 보람이 있는 듯. 하하하.` },
                { speaker: `👤 ${state.userName}`, text: `(꼬르륵)` },
                { speaker: `👤 ${state.userName}`, text: `아 진짜 배고프다. 밥 먹으러 가야지.` },
            ];
                
        }
        return [];
    }

    return {
        id: "marseille2",
        background_img: "assets/images/marseilleStreet.jpg",
        narration: "",
        lines:
            state.visitedMarseilleSpots.size === 3
            ? [ ...insertIntroLineIfAllVisited() ]

            : state.visitedMarseilleSpots.size > 0
            ? [
                {speaker: ``, text: ``,
                    choices: {
                        prompt: `어디로 가볼까?`,
                        options: () => makeOptions()
                    }
                }
            ]

            : [
            { speaker: `👤 ${state.userName}`, text: `마르세유에 도착했다!` },
            { speaker: `👤 ${state.userName}`, text: `마침 날씨도 너무 좋은데?` },
            { speaker: `👤 ${state.userName}`, text: `참, 오는 길에 인터넷에서 마르세유에서 가볼 만한 곳들을 찾아보았는데...` },
            { speaker: `👤 ${state.userName}`, text: `어디로 가볼까?` },
            { speaker: ``, text: ``,
                choices: {
                    prompt: `어디로 가볼까?`,
                    options: () => makeOptions()
                }
            }
        ],

        nextScene: () => {
            const next = state.nextScene || getEnd1Scene();
            state.nextScene = null;
            return next;
        }
    };
}