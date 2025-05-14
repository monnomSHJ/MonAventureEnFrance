import { state } from "../../script.js";
import { renderQuest } from "../../statusBar.js";
import { getHotel1Scene } from "./hotel1.js";

export function getAirport4Scene() {

    const selectedHotel = state.selectedHotelName;

    return {
        id: "airport4",
        background_img: "assets/images/taxiMain.jpeg",
        narration: "",
        retryLines: [
            { speaker: `👨‍✈️ Chauffeur`, text: "Pardon ?"},
            { speaker: `👤 ${state.userName}`, text: ".. 다시 한 번 시도해보자."},
            { speaker: `📢`, text: "1점이 차감되었습니다."}
        ],
        lines: [
            { speaker: `👤 ${state.userName}`, text: `Bonjour ! ${selectedHotel}, s'il vous plaît.`},
            { speaker: `👨‍✈️ Chauffeur`, text: "D'accord !"},
            { speaker: ``, text: `🚕🚕🚕...`},
            { speaker: ``, text: `🚕🚕🚕........`},
            { speaker: ``, text: `🚕🚕🚕..............`},
            { speaker: `👤 ${state.userName}`, text: `... 뭔가 택시 기사님이 말을 걸까봐 두렵다.`},
            { speaker: `👨‍✈️ Chauffeur`, text: `Vous venez d'où ?`},
            { speaker: `👤 ${state.userName}`, text: `젠장... 저 질문에는 어떻게 답해야 하더라?`},
            { speaker: ``, text: "",
                production: {
                    prompt: "_ _ _ _",
                    meaning: `질문: Vous venez d'où ?<br>어떻게 답변해야 할까요?`,
                    words: ["viens", "Je", "Corée", "est", "de", "un", "touriste"],
                    answer: ["Je", "viens", "de", "Corée"]
                }
            },
            { speaker: `📢`, text: "문장 만들기 성공! 5점을 획득하였습니다."},
            { speaker: `👤 ${state.userName}`, text: `Je viens de Corée. J'habite en Corée du Sud.`},
            { speaker: `👨‍✈️ Chauffeur`, text: `Ah, vous venez de Corée ? C'est un beau pays !`},
            { speaker: `👨‍✈️ Chauffeur`, text: `C'est la première fois que vous venez en France ?`},
            { speaker: `👤 ${state.userName}`, text: `Oui, c'est ma première fois.`},
            { speaker: `👨‍✈️ Chauffeur`, text: `Très bien. Vous parlez très bien français !`},
            { speaker: `👤 ${state.userName}`, text: `Merci ! (뿌듯)`},
            { speaker: ``, text: `나는 그렇게 택시 기사님과 스몰토크를 나누며 숙소로 이동했다.`},
            { speaker: `📢`, text: "유후! 이제 정말 프랑스 여행에 익숙해지신 것 같네요!"},
            { speaker: `📢`, text: "아주 잘하고 있습니다."},
            { speaker: `📢`, text: "여기서 잠깐 토막상식!", overlayImg: "assets/images/taxiOverlay.jpeg"},
            { speaker: `📢`, text: "프랑스, 특히 파리의 공항택시는 2016년부터 정찰제 요금(tarifs forfaitaires) 제도를 시행하고 있습니다.", overlayImg: "assets/images/airportTaxi1.png"},
            { speaker: `📢`, text: "이에 따라, 공항과 파리 시내 사이 구간에 대해 고정 요금이 적용됩니다.", overlayImg: "assets/images/airportTaxi1.png"},
            { speaker: `📢`, text: "파리 외곽 지역은 정찰제가 적용되지 않습니다.", overlayImg: "assets/images/airportTaxi1.png"},
            { speaker: `📢`, text: "택시의 크기에 상관 없이 4인까지는 가격이 동일하며, 5인 이상부터는 추가요금이 붙습니다.", overlayImg: "assets/images/airportTaxi1.png"},
            { speaker: `📢`, text: "우버나 볼트 같은 콜택시는 정찰제가 적용되지 않아 차가 막힐 경우 비용이 더 나갈 수 있답니다.", overlayImg: "assets/images/airportTaxi1.png"},
            { speaker: `📢`, text: "참고로, 공식 공항 택시임에도 이러한 규정을 지키지 않는 경우가 발생할 수 있습니다.", overlayImg: "assets/images/airportTaxi1.png"},
            { speaker: `📢`, text: "따라서 각 공항에서도 타기 전에 반드시 요금을 확인하고 탈 것을 당부하며,", overlayImg: "assets/images/airportTaxi1.png"},
            { speaker: `📢`, text: "이 규정을 지키지 않은 경우 영수증을 챙겨서 공항에 신고할 것을 강조하고 있습니다.", overlayImg: "assets/images/airportTaxi1.png"},
            { speaker: `📢`, text: "이 점을 꼭 유의하며 안전한 프랑스 여행 즐기시길 바랍니다!", overlayImg: "assets/images/airportTaxi1.png"},
        ],
        
        nextScene: () => {
            state.currentQuest = "숙소 입장";
            renderQuest();
            return getHotel1Scene();
        }
    }
}