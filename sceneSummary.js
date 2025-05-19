import hotelData from "./data/hotelData.js";
import { state } from "./script.js";

export function getSceneSummaries() {
    const hotel = hotelData.find(h => h.id === state.selectedHotelId);

    return [
        {
            sceneTitle: "🏨 숙소 예약",
            description: hotel
                ? `파리에 가기 전, 파리에서 묵을 숙소를 예약했다. 내가 예약한 숙소의 이름은 ${hotel.name}였다.`
                : "숙소 정보 없음",
            sceneImage: hotel ? hotel.image : ""
        },
        {
            sceneTitle: "✈️ 파리행 비행기",
            description: `부푼 마음을 안고 파리행 비행기를 탔다.`,
            goals: ["💡 프랑스의 지리 이해하기"],
            sceneImage: ""
        },
        {
            sceneTitle: "✈️ 파리 도착",
            description: `샤를 드 골 공항에 도착해서, 공항 직원 분과의 대화를 통해 택시 승강장의 위치를 찾고 택시를 탔다. 택시에서는 기사님과 간단한 이야기를 나누었다. 기사님의 칭찬에 프랑스어로 말하는 것에 자신감이 생겼다.`,
            dialogues: ["Excusez-moi, où est la station de taxi ?", "Je viens de Corée."],
            goals: ["💡 위치 묻기", "💡 길 찾기 표현 이해하고 목적지 찾아가기", "💡 국적 묻고 답하기", "💡 파리 공항 택시 정찰제 이해하기"],
            sceneImage: ""
        },
        {
            sceneTitle: "🏨 숙소 도착",
            description: `숙소에 도착해서 프론트 직원 분께 숙소에 관한 설명을 듣고, 내 방에 찾아갔다. 정말이지 최고의 숙소였다.`,
            dialogues: ["dd"],
            goals: [""],
            sceneImage: ""
        }
    ]
}