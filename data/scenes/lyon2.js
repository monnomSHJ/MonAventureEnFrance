import { state } from "../../script.js";

export function getLyon2Scene() {

    return {
        id: "lyon2",
        background_img: "assets/imgaes/lyonStreet.png",
        narration: "",
        lines: [
            { speaker: `👤 ${state.userName}`, text: `리옹에 도착했다!` },
            { speaker: `👤 ${state.userName}`, text: `마침 날씨도 너무 좋은데?` },
            { speaker: `👤 ${state.userName}`, text: `참, 오는 길에 인터넷에서 리옹에서 가볼 만한 곳들을 찾아보았는데...` },
            { speaker: `👤 ${state.userName}`, text: `어디로 가볼까?` },
        ],

        nextScene: () => {
            console.log('dd');
        }
    }
}