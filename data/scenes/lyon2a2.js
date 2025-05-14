import { state } from "../../script.js";
import { getLyon2Scene } from "./lyon2.js";

export function getLyon2a2Scene() {

    const artworks = {
        "아이언맨 수트": [
            { speaker: ``, text: "Voici l'armure portée dans le film Iron Man.", overlayImg: "assets/images/ironMan.jpg" },
        ],
        "토르 망치": [
            { speaker: ``, text: "Voici le marteau utilisé dans le film Thor.", overlayImg: "assets/images/thor.jpg" },
        ],
        "스파이더맨 수트": [
            { speaker: ``, text: "Voici l'armure portée dans le film Spider-Man.", overlayImg: "assets/images/spiderMan.jpg" },
        ],
        "007 제임스본드 수트": [
            { speaker: `📢`, text: "Voici le costume porté par James Bond dans le film 007:Skyfall.", overlayImg: "assets/images/jamesBond.jpg" },
        ]
    };

    function makeChoice(label) {
        state.viewedLyonArtworks.add(label);

        const lines = artworks[label].map(line => ({ ...line }));

        if (state.viewedLyonArtworks.size < 4) {
            lines.push({
                speaker: "",
                text: "",
                showChoiceAgain: true,
                choices: {
                    prompt: "어떤 작품을 감상해볼까요?",
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
            disabled: state.viewedLyonArtworks.has(label)
        }));
    }

    return {
        id: "lyon2a2",
        background_img: "assets/images/miniatureBg.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `박물관에 들어오니 박물관에 대한 소개 글이 적혀있다.`, overlayImg: "assets/images/miniatureOverlay1.jpg" },
            { speaker: `👤 ${state.userName}`, text: `Bienvenue au musée Cinéma et Miniature de Lyon !`, overlayImg: "assets/images/miniatureOverlay1.jpg" },
            { speaker: `👤 ${state.userName}`, text: `Ce musée n'est pas intéressant que pour les adultes.`, overlayImg: "assets/images/miniatureOverlay1.jpg" },
            { speaker: `👤 ${state.userName}`, text: `Au musée, on peut voir des vêtements de films, comme des costumes et des armures.`, overlayImg: "assets/images/miniatureOverlay1.jpg" },
            { speaker: `👤 ${state.userName}`, text: `Découvrez les secrets des effets spéciaux du cinéma et admirez plus de 100 scènes miniatures incroyablement réalistes.`, overlayImg: "assets/images/miniatureOverlay1.jpg" },
            { speaker: `👤 ${state.userName}`, text: `어떤 작품을 봐볼까?` },
            { speaker: ``, text: ``,
                choices: {
                    prompt: "어떤 작품을 감상해볼까요?",
                    get options() {
                        return makeOptions();
                    }
                }
             }
        ],

        nextScene: () => {
            return getLyon2Scene();
        }
    }
}