import { state } from "../../script.js";
import { getMarseille2Scene } from "./marseille2.js";

export function getMarseille2a2Scene() {

    const artworks = {
        "Un air de famille": [
            { speaker: ``, text: "L'artiste Hervé Di Rosa présente ses œuvres inspirées des objets du musée.", overlayImg: "assets/images/unAirDeFamille.jpg" },
            { speaker: ``, text: "Il parle de la famille et des liens entre les gens.", overlayImg: "assets/images/unAirDeFamille.jpg" },
        ],
        "Cycles, parures, motifs": [
            { speaker: ``, text: "Cette exposition montre des bijoux, vêtements et motifs de la culture amazighe.", overlayImg: "assets/images/cyclesParuresMotifs.jpg" },
            { speaker: ``, text: "Elle célèbre l'art et les traditions du Maghreb.", overlayImg: "assets/images/cyclesParuresMotifs.jpg" },
        ],
        "Au fort, les âmes sont": [
            { speaker: ``, text: "L'artiste Laure Prouvost crée un parcours artistique dans le fort Saint-Jean.", overlayImg: "assets/images/auFortLesAmesSont.jpg" },
            { speaker: ``, text: "Ses œuvres parlent de mémoire, de nature et de transformation.", overlayImg: "assets/images/auFortLesAmesSont.jpg" },
        ],
        "Méditerranées Épisode 1": [
            { speaker: `📢`, text: "Cette exposition explore l'histoire et les cultures de la Méditerranée.", overlayImg: "assets/images/mediterraneesEpisode1.jpg" },
            { speaker: `📢`, text: "Elle présente des objets anciens et des œuvres modernes.", overlayImg: "assets/images/mediterraneesEpisode1.jpg" },
        ]
    };

    function makeChoice(label) {
        state.viewedMarseilleArtworks.add(label);

        const lines = artworks[label].map(line => ({ ...line }));

        if (state.viewedMarseilleArtworks.size < 4) {
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
            disabled: state.viewedMarseilleArtworks.has(label)
        }));
    }

    return {
        id: "marseille2a2",
        background_img: "assets/images/museeDesCivilisations.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `이 박물관은 지중해 문화 전반을 다루는, 테마 중심의 박물관 같다.` },
            { speaker: `👤 ${state.userName}`, text: `건물의 외관은 물론이고 내부도 정말 아름다운데?` },
            { speaker: `👤 ${state.userName}`, text: `어떤 전시를 봐볼까?` },
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
            return getMarseille2Scene();
        }
    }
}