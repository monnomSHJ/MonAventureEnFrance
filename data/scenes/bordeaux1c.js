import { state } from "../../script.js";
import { getBordeaux1caScene } from "./bordeaux1ca.js";

export function getBordeaux1cScene() {

    return {
        id: "bordeaux1c",
        background_img: "assets/images/hotelRoomBg.jpg",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `비행기표도 예매했으니, 이제 좀 자볼까...` },
            { speaker: `👤 ${state.userName}`, text: `쿨쿨. 드르렁. 커허헉.` },
            { speaker: `📢`, text: `보르도에 가기 전에, 보르도가 어떤 곳인지 알아두면 좋겠죠?` },
            { speaker: `📢`, text: `보르도는 프랑스 남서부, 대서양 근처에 위치해 있습니다.`, overlayImg: `assets/images/bordeauxMap.jpg` },
            { speaker: `📢`, text: `18세기 고전주의와 신고전주의 건축물과, 도시계획이 통일성·일관성 있게 보존되어 보르도는,`, overlayImg: `assets/images/bordeauxDescriptionOverlay1.jpg` },
            { speaker: `📢`, text: `"뛰어난 도시와 건축의 앙상블"로서 유네스코 세계문화유산에도 등재되어 있습니다.`, overlayImg: `assets/images/bordeauxDescriptionOverlay1.jpg` },
            { speaker: `📢`, text: `이곳은 세계적으로 유명한 와인 생산지이기도 합니다.`, overlayImg: `assets/images/bordeauxDescriptionOverlay2.jpg` },
            { speaker: `📢`, text: `보르도의 키워드를 정리하자면... '와인', '우아한 도시', '강변의 도시' 정도가 되겠네요!`, overlayImg: `assets/images/bordeauxDescriptionOverlay2.jpg` },
            { speaker: `📢`, text: `보르도에서 엿볼 수 있는 18세기 프랑스의 모습과 향긋한 와인의 맛을 마음껏 만끽하시길 바랍니다!`, overlayImg: `assets/images/bordeauxDescriptionOverlay2.jpg` },
        ],

        nextScene: () => {
            return getBordeaux1caScene();
        }
    }
}