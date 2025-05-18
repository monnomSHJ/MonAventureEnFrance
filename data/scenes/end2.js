import { state } from "../../script.js";

export function getEnd2Scene() {

    return {
        id: "end2",
        background_img: "",
        narration: "",
        lines: [
            { speaker: "📢", text: "짜잔. 결과 출력 링크 추가 예정"},
            { speaker: "📢", text: "마지막으로, 플레이주셔서 다시 한번 감사드립니다!"},
            { speaker: "📢", text: "마지막 마무리 페이지... 추가 예정"},
        ],

        nextScene: () => {
            console.log('dd');
        }
    }
}