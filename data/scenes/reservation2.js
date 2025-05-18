import { state } from "../../script.js";
import { renderQuest } from "../../statusBar.js";
import { getAirport1Scene } from "./airport1.js";

export function getReservation2Scene() {
    return {
        id: "reservation2",
        background_img: "assets/images/airplane-window.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: "오랜 시간 꿈꿔왔던 프랑스로의 여행." },
            { speaker: `👤 ${state.userName}`, text: "처음 떠나는 해외여행인지라 더 떨리는데?" },
            { speaker: `👤 ${state.userName}`, text: "... 그래도 열심히 프랑스어 공부했으니까." },
            { speaker: `👤 ${state.userName}`, text: "별 문제 없겠지?" },
            { speaker: `📢`, text: "과연..." },
            { speaker: `👤 ${state.userName}`, text: "아 뭐야 누구세요?" },
            { speaker: `📢`, text: "..." },
            { speaker: `👤 ${state.userName}`, text: "잘못 들었나?" },
            { speaker: `👤 ${state.userName}`, text: "... 프랑스에 도착하려면 한참 남았으니 잠이나 좀 자야겠다."},
            { speaker: `👤 ${state.userName}`, text: "쿨쿨. 드르렁. 커허헉." },
            { speaker: `📢`, text: "프랑스로의 여행이라니... 기대되면서도 많이 긴장되실텐데요."},
            { speaker: `📢`, text: "그런 여러분을 위해 제가 선물을 준비했습니다."},
            { speaker: `📢`, text: "이미 확인하셨을 수도 있겠지만... 아래에 보시면 단어장이 있습니다."},
            { speaker: `📢`, text: "단어장을 열어서 프랑스어 단어를 클릭하시면 한국어로 뜻이 나와요."},
            { speaker: `📢`, text: "각 단어의 옆에 있는 별 모양을 클릭하시면 '즐겨찾기'로 저장할 수도 있습니다."},
            { speaker: `📢`, text: "혁신적이죠?"},
            { speaker: `📢`, text: "높은 점수를 위해 단어장을 잘 활용하시길 바랍니다."},
            { speaker: `📢`, text: "그러면 이제 본격적으로 시작!"},
            { speaker: `📢`, text: "... 하기 전에, 여기서 깜짝 토막 상식!", overlayImg: "assets/images/franceMap.png" },
            { speaker: `📢`, text: "프랑스는 유럽의 서쪽에 위치해있으며, 수도는 파리입니다.", overlayImg: "assets/images/franceMap.png" },
            { speaker: `📢`, text: "파리는 세느 강(La Seine)을 중심으로 남북으로 나뉘며,", overlayImg: "assets/images/parisAirportMap.png" },
            { speaker: `📢`, text: "우리의 목적지인 샤를 드골 공항은 파리의 북쪽, 외곽에 위치해있습니다.", overlayImg: "assets/images/parisAirportMap.png" },
            { speaker: `📢`, text: "공항에 도착할 때까지 잠시만 기다려주세요.", overlayImg: "assets/images/toParis.jpeg" }
        ],
        
        nextScene: () => {
            state.currentQuest = "";
            renderQuest();
            return getAirport1Scene();
        }
    }
}