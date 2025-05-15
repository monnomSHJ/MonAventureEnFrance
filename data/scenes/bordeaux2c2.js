import { state } from "../../script.js";
import { getBordeaux2Scene } from "./bordeaux2.js";

export function getBordeaux2c2Scene() {

    const artworks = {
        "포도밭 영상 시청": [
            { speaker: `👤 Employé`, text: "Bonjour !", personImg: "assets/images/citeDuVinPerson1.png" },
            { speaker: `👤 Employé`, text: "À Bordeuax, on produit du vin célèbre.", personImg: "assets/images/citeDuVinPerson1.png" },
            { speaker: `👤 Employé`, text: "Ici, vous pouvez voir une vidéo sur les vignobles de Bordeaux.", personImg: "assets/images/citeDuVinPerson1.png" },
            { speaker: `👤 Employé`, text: "On vous montre comment on plante et récolte le raisin.", personImg: "assets/images/citeDuVinPerson1.png" },
            { speaker: `👤 Employé`, text: "C'est très beau à regarder et facile à comprendre.", personImg: "assets/images/citeDuVinPerson1.png" },
            { speaker: `👤 Employé`, text: "Je suis là pour vous aider.", personImg: "assets/images/citeDuVinPerson1.png" },
            { speaker: ``, text: "보르도의 포도밭에 관한 영상을 시청했다." },
        ],
        "와인 시향": [
            { speaker: `👤 Employée`, text: "Bonjour !", personImg: "assets/images/citeDuVinPerson2.png" },
            { speaker: `👤 Employée`, text: "Ici, vous pouvez sentir différents arômes du vin.", personImg: "assets/images/citeDuVinPerson2.png" },
            { speaker: `👤 Employée`, text: "Il y a des odeurs de fruits, fleurs, et bois.", personImg: "assets/images/citeDuVinPerson2.png" },
            { speaker: `👤 Employée`, text: "Je suis là pour vous aider.", personImg: "assets/images/citeDuVinPerson2.png" },
            { speaker: ``, text: "와인의 향이 참 향긋하다." },
        ],
        "와인 시음": [
            { speaker: `👤 Employée`, text: "Bonjour !", personImg: "assets/images/citeDuVinPerson3.png" },
            { speaker: `👤 Employée`, text: "Je suis le guide employé pour la dégustation.", personImg: "assets/images/citeDuVinPerson3.png" },
            { speaker: `👤 Employée`, text: "Je vous invite à participer à la dégustation de vins.", personImg: "assets/images/citeDuVinPerson3.png" },
            { speaker: `👤 Employée`, text: "Est-ce que vous aimez le vin de Bordeaux ?", personImg: "assets/images/citeDuVinPerson3.png" },
            { speaker: `👤 Employée`, text: "Même si vous n'avez pas l'habitude de boire, le vin de Bordeaux est vraiment délicieux !", personImg: "assets/images/citeDuVinPerson3.png" },
            { speaker: `👤 Employée`, text: "Ici, vous pouvez goûter un vin de Bordeaux !", personImg: "assets/images/citeDuVinPerson3.png" },
            { speaker: `👤 Employée`, text: "Regardez sa couleur, sentez l'arôme, et puis goûtez doucement.", personImg: "assets/images/citeDuVinPerson3.png" },
            { speaker: `👤 Employée`, text: "Prenez votre temps et choisissez celui que vous préférez.", personImg: "assets/images/citeDuVinPerson3.png" },
            { speaker: `👤 Employée`, text: "Moi aussi, je viens d'acheter une bouteille de vin.", personImg: "assets/images/citeDuVinPerson3.png" },
            { speaker: `👤 Employée`, text: "Je suis là pour vous aider.", personImg: "assets/images/citeDuVinPerson3.png" },
            { speaker: `👤 Employée`, text: "Santé !", personImg: "assets/images/citeDuVinPerson3.png" },
            { speaker: ``, text: "여러 와인들의 향과 맛을 음미하며 시간을 보냈다." },
        ]
    };

    function makeChoice(label) {
        state.viewedBordeauxArtworks.add(label);

        const lines = artworks[label].map(line => ({ ...line }));

        if (state.viewedBordeauxArtworks.size < 4) {
            lines.push({
                speaker: "",
                text: "",
                showChoiceAgain: true,
                choices: {
                    prompt: "어떤 활동을 해볼까요?",
                    options: () => makeOptions()
                }
            });
        } else {
            lines.push(
                { speaker: `👤 ${state.userName}`, text: "정말 색다르고 재미있는 곳이었다." });
        }
        
        return lines;
    };

    function makeOptions() {
        return Object.keys(artworks).map(label => ({
            label,
            scoreDelta: 0,
            insertLines: () => makeChoice(label),
            disabled: state.viewedBordeauxArtworks.has(label)
        }));
    }

    return {
        id: "bordeaux2c2",
        background_img: "assets/images/citeDuVin.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `이곳에서는 와인과 관련된 다양한 활동들을 할 수 있나보다.` },
            { speaker: `👤 ${state.userName}`, text: `어떤 활동을 해볼까?` },
            { speaker: ``, text: ``,
                choices: {
                    prompt: "어떤 활동을 해볼까요?",
                    get options() {
                        return makeOptions();
                    }
                }
             }
        ],

        nextScene: () => {
            return getBordeaux2Scene();
        }
    }
}