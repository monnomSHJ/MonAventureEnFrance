import { state } from "../../script.js";
import { getMarseille1aaScene } from "./marseille1aa.js";

export function getMarseille1aScene() {

    return {
        id: "marseille1a",
        background_img: "assets/images/hotelRoomBg.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `기차표도 예매했으니, 이제 좀 자볼까...` },
            { speaker: `👤 ${state.userName}`, text: `쿨쿨. 드르렁. 커허헉.` },
            { speaker: `📢`, text: `마르세유에 가기 전에, 마르세유가 어떤 곳인지 알아두면 좋겠죠?` },
            { speaker: `📢`, text: `마르세유는 프랑스 남부, 지중해 연안에 위치해 있습니다.`, overlayImg: `assets/images/marseilleMap.jpg` },
            { speaker: `📢`, text: `프랑스 최대의 항구 도시인 마르세유는,`, overlayImg: `assets/images/marseilleDescriptionOverlay1.jpg` },
            { speaker: `📢`, text: `지중해 특유의 다문화적인 분위기를 풍깁니다.`, overlayImg: `assets/images/marseilleDescriptionOverlay1.jpg` },
            { speaker: `📢`, text: `마르세유는 각종 해산물 요리와, 프랑스 남부 지역의 전통 생선 스튜인 Bouillabaisse(부야베스)로 유명하답니다.`, overlayImg: `assets/images/marseilleDescriptionOverlay2.jpg` },
            { speaker: `📢`, text: `마르세유의 키워드를 정리하자면... '지중해', '항구', '다문화' 정도가 되겠네요!`, overlayImg: `assets/images/marseilleDescriptionOverlay2.jpg` },
            { speaker: `📢`, text: `마르세유에서 맛있는 해산물 요리와 다문화 분위기를 마음껏 만끽하시길 바랍니다!`, overlayImg: `assets/images/marseilleDescriptionOverlay2.jpg` },
        ],

        nextScene: () => {
            return getMarseille1aaScene();
        }
    }
}