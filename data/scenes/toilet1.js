import { state } from "../../script.js";
import { getToilet2Scene } from "./toilet2.js";

export function getToilet1Scene() {

    return {
        id: "toilet1",
        background_img: "assets/images/parisMainStreet.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `파리의 여기저기를 돌아다니며 알찬 시간을 보냈다.` },
            { speaker: `👤 ${state.userName}`, text: `그런데, 여행에 정신이 팔려 화장실을 못갔네.` },
            { speaker: `👤 ${state.userName}`, text: `근처에 화장실이 있으려나?` },
            { speaker: `👤 ${state.userName}`, text: `저기 보이는 사람에게 물어보자.` },
            { speaker: ``, text: ``,
                choices: {
                    prompt: "누구에게 물어볼까요?",
                    options: [
                        {
                            label: "저 남성 분께 여쭤보자!",
                            scoreDelta: 0,
                            insertLines: [
                                { speaker: `👤 ${state.userName}`, text: `Bonjour, monsieur. Je voudrais savoir...` },
                                { speaker: `👨 Monsieur`, text: `Oui ?`, personImg: `assets/images/streetPersonMale.png` },
                                { speaker: `👤 ${state.userName}`, text: `Où est la toilette, s'il vous plaît ?`, personImg: `assets/images/streetPersonMale.png` },
                                { speaker: `👨 Monsieur`, text: `La toilette ?`, personImg: `assets/images/streetPersonMale.png` },
                                { speaker: `👨 Monsieur`, text: `Vous passez devant ce bâtiment là-bas, puis vous continuez tout droit.`, personImg: `assets/images/streetPersonMale.png` },
                                { speaker: `👤 ${state.userName}`, text: `Merci beaucoup !`, personImg: `assets/images/streetPersonMale.png` },
                                { speaker: `👨 Monsieur`, text: `Avec plaisir !`, personImg: `assets/images/streetPersonMale.png` },
                                { speaker: `👤 ${state.userName}`, text: `남성 분이 알려주신 대로 화장실을 찾아가보자.` },
                            ]
                        },
                        {
                            label: "저 여성 분께 여쭤보자!",
                            scoreDelta: 0,
                            insertLines: [
                                { speaker: `👤 ${state.userName}`, text: `Bonjour, mademoiselle. Je voudrais savoir...` },
                                { speaker: `👩 Madame`, text: `Oui ?`, personImg: `assets/images/streetPersonFemale.png` },
                                { speaker: `👤 ${state.userName}`, text: `Où sont les toilettes, s'il vous plaît ?`, personImg: `assets/images/streetPersonFemale.png` },
                                { speaker: `👩 Madame`, text: `Les toilettes ?`, personImg: `assets/images/streetPersonFemale.png` },
                                { speaker: `👩 Madame`, text: `Vous passez devant ce bâtiment là-bas, puis vous continuez tout droit.`, personImg: `assets/images/streetPersonFemale.png` },
                                { speaker: `👤 ${state.userName}`, text: `Merci beaucoup !`, personImg: `assets/images/streetPersonFemale.png` },
                                { speaker: `👩 Madame`, text: `Avec plaisir !`, personImg: `assets/images/streetPersonFemale.png` },
                                { speaker: `👤 ${state.userName}`, text: `여성 분이 알려주신 대로 화장실을 찾아가보자.` },
                            ]
                        }
                    ]
                }
             },
        ],

        nextScene: () => {
            return getToilet2Scene();
        }
    }
}