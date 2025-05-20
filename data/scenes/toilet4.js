import { state } from "../../script.js";
import { getLyon1Scene } from "./lyon1.js";
import { getMarseille1Scene } from "./marseille1.js";
import { getStrasbourg1Scene } from "./strasbourg1.js";
import { getBordeaux1Scene } from "./bordeaux1.js";

let selectedScene = null;

export function getToilet4Scene() {

    selectedScene = null;

    return {
        id: "toilet4",
        background_img: "assets/images/hotelRoomBg.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `방으로 돌아왔다.` },
            { speaker: `👤 ${state.userName}`, text: `오늘은 파리를 어느 정도 구경했으니까...` },
            { speaker: `👤 ${state.userName}`, text: `내일은 파리 말고 다른 지역을 놀러가고 싶은데.` },
            { speaker: `👤 ${state.userName}`, text: `어디로 가볼까?` },
            { speaker: ``, text: ``,
                choices: {
                    prompt: "내일은 어디로 가볼까? 내가 늘 가고 싶었던 곳이...",
                    options: [
                        {
                            label: "리옹",
                            scoreDelta: 0,
                            insertLines: [
                                { speaker: `👤 ${state.userName}`, text: `그래, 리옹에 가보자!` }, 
                                { speaker: `👤 ${state.userName}`, text: `그러면... 리옹에 가는 교통편을 찾아봐야겠다.` },   
                            ],
                            
                            customAction: () => { 
                                selectedScene = getLyon1Scene();
                                state.selectedCity = "lyon";
                            }
                        },
                        {
                            label: "마르세유",
                            scoreDelta: 0,
                            insertLines: [
                                { speaker: `👤 ${state.userName}`, text: `그래, 마르세유에 가보자!` },
                                { speaker: `👤 ${state.userName}`, text: `그러면... 마르세유에 가는 교통편을 찾아봐야겠다.` },   
                            ],

                            customAction: () => { 
                                selectedScene = getMarseille1Scene();
                                state.selectedCity = "marseille";
                            }
                        },
                        {
                            label: "스트라스부르",
                            scoreDelta: 0,
                            insertLines: [
                                { speaker: `👤 ${state.userName}`, text: `그래, 스트라스부르에 가보자!` },
                                { speaker: `👤 ${state.userName}`, text: `그러면... 스트라스부르에 가는 교통편을 찾아봐야겠다.` },   
                            ],

                            customAction: () => { 
                                selectedScene = getStrasbourg1Scene();
                                state.selectedCity = "strasbourg";
                            }
                        },
                        {
                            label: "보르도",
                            scoreDelta: 0,
                            insertLines: [
                                { speaker: `👤 ${state.userName}`, text: `그래, 보르도에 가보자!` },
                                { speaker: `👤 ${state.userName}`, text: `그러면... 보르도에 가는 교통편을 찾아봐야겠다.` },   
                            ],
                                                        
                            customAction: () => { 
                                selectedScene = getBordeaux1Scene();
                                state.selectedCity = "bordeaux";
                            }
                        },
                    ]
                }
            },
        ],

        nextScene: () => {
            return selectedScene;
        }
    }
}