import { state } from "../../script.js";
import { getLyon1caScene } from "./lyon1ca.js";

export function getLyon1cScene() {

    return {
        id: "lyon1a",
        background_img: "assets/images/hotelRoomBg.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `비행기표도 예매했으니, 이제 좀 자볼까...` },
            { speaker: `👤 ${state.userName}`, text: `쿨쿨. 드르렁. 커허헉.` },
            { speaker: `📢`, text: `리옹에 가기 전에, 리옹이 어떤 곳인지 알아두면 좋겠죠?` },
            { speaker: `📢`, text: `리옹은 프랑스 동남부, 론강과 손강 사이에 위치해 있습니다.`, overlayImg: `assets/images/lyonMap.jpg` },
            { speaker: `📢`, text: `프랑스 '미식의 수도'라고 불리는 리옹은,`, overlayImg: `assets/images/lyonMap.jpg` },
            { speaker: `📢`, text: `Bouchon Lyonnais라는 전통 음식점으로 유명합니다.`, overlayImg: `assets/images/lyonDescriptionOverlay1.jpg` },
            { speaker: `📢`, text: `Bouchon Lyonnais은 리옹식 음식을 파는 음식점을 뜻합니다.`, overlayImg: `assets/images/lyonDescriptionOverlay1.jpg` },
            { speaker: `📢`, text: `리옹 구시가지는 르네상스 문화를 그대로 간직하고 있는 것으로도 유명합니다.`, overlayImg: `assets/images/lyonDescriptionOverlay2.jpg` },
            { speaker: `📢`, text: `리옹의 키워드를 정리하자면... '음식', '강 사이에 위치한 도시', '옛 건축물' 정도가 되겠네요!`, overlayImg: `assets/images/lyonDescriptionOverlay2.jpg` },
            { speaker: `📢`, text: `리옹에서 맛있는 음식과 르네상스 시대의 풍경을 마음껏 만끽할 수 있길 바랍니다!`, overlayImg: `assets/images/lyonDescriptionOverlay2.jpg` },
        ],

        nextScene: () => {
            return getLyon1caScene();
        }
    }
}