import { state } from "../../script.js";
import { getStrasbourg1aaScene } from "./strasbourg1aa.js";

export function getStrasbourg1aScene() {

    return {
        id: "strasbourg1a",
        background_img: "assets/images/hotelRoomBg.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `기차표도 예매했으니, 이제 좀 자볼까...` },
            { speaker: `👤 ${state.userName}`, text: `쿨쿨. 드르렁. 커허헉.` },
            { speaker: `📢`, text: `스트라스부르에 가기 전에, 스트라스부르가 어떤 곳인지 알아두면 좋겠죠?` },
            { speaker: `📢`, text: `스트라스부르는 프랑스 동부, 독일 국경 근처에 위치해 있습니다.`, overlayImg: `assets/images/strasbourgMap.jpg` },
            { speaker: `📢`, text: `유럽 의회 본부가 위치한 정치적 중심지인 스트라스부르는,`, overlayImg: `assets/images/strasbourgMap.jpg` },
            { speaker: `📢`, text: `중세풍 목조가옥과 스트라스부르 대성당과 같은 건축물을 관람하기에 좋은 곳입니다.`, overlayImg: `assets/images/strasbourgDescriptionOverlay1.jpg` },
            { speaker: `📢`, text: `흥미로운 점은, 스트라스부르가 유럽에서 가장 유명한 크리스마스 마켓 중 하나라고 하네요.`, overlayImg: `assets/images/strasbourgDescriptionOverlay2.jpg` },
            { speaker: `📢`, text: `스트라스부르의 키워드를 정리하자면... '유럽의 심장', '독일 문화 융합', '스트라스부르 대성당' 정도가 되겠네요!`, overlayImg: `assets/images/strasbourgDescriptionOverlay2.jpg` },
            { speaker: `📢`, text: `스트라스부르에서 독일 문화의 융합과, 중세풍 건축물들의 멋을 한껏 느껴보세요!`, overlayImg: `assets/images/strasbourgDescriptionOverlay2.jpg` },
        ],

        nextScene: () => {
            return getStrasbourg1aaScene();
        }
    }
}