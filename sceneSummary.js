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
            goals: ["숙소 정보 읽고 이해하기"],
            sceneImage: hotel ? hotel.image : ""
        },
        {
            sceneTitle: "✈️ 파리행 비행기",
            description: `부푼 마음을 안고 파리행 비행기를 탔다.`,
            goals: ["프랑스의 지리 이해하기"],
            sceneImage: "assets/images/airplane-window.jpg"
        },
        {
            sceneTitle: "✈️ 파리 도착",
            description: `샤를 드 골 공항에 도착해서, 공항 직원 분과의 대화를 통해 택시 승강장의 위치를 찾고 택시를 탔다. 택시에서는 기사님과 간단한 이야기를 나누었다. 기사님의 칭찬에 프랑스어로 말하는 것에 자신감이 생겼다.`,
            dialogues: ["Excusez-moi, où est la station de taxi ?", "Je viens de Corée."],
            goals: ["위치 묻기", "길 찾기 표현 이해하고 목적지 찾아가기", "국적 묻고 답하기", "파리 공항 택시 정찰제 이해하기"],
            sceneImage: "assets/images/taxiMain.jpeg"
        },
        {
            sceneTitle: "🏨 숙소 도착",
            description: `숙소에 도착해서 프론트 직원 분께 숙소에 관한 설명을 듣고, 내 방에 찾아갔다. 정말이지 최고의 숙소였다.`,
            dialogues: ["Vous êtes dans la chambre 305, au troisième étage.", "Le petit déjeuner est servi jusqu'à 9 heures.", "Et n'oubliez pas : pas de bruit après 22 heueres."],
            goals: ["층수 표현 이해하기", "시간 표현 이해하기", "프랑스의 층수 개념"],
            sceneImage: "assets/images/hotelLobbyMain.jpg"
        },
        {
            sceneTitle: "🍴 파리에서의 첫 끼",
            description: `숙소 프론트 직원 분께 식당을 추천 받아 파리에서의 첫 끼를 즐겼다. 내가 주문한 것은 ${state.selectedDish.name}이다. 최고로 맛있는 한 끼였다!`,
            dialogues: ["Connaissez-vous un bon restaurant près d'ici ?", "Vous êtes combien ?", "Alors, qu'est-ce que vous voulez ?", "J'ai envie de manger ...", "L'addition, s'il vous plaît."],
            goals: ["갈 만한 곳 추천 받기", "길 찾기 표현 이해하고 목적지 찾아가기", "음식 주문하고 결제하기", "프랑스의 식당 예절 이해하기"],
            sceneImage: `${state.selectedDish.image}`
        },
        {
            sceneTitle: "☕ 커피 한 잔의 여유",
            description: `웨이터의 추천으로 식당 주변에 있는 Cafe de Flore에 방문했다. 역사적으로 유명한 인물들이 자주 드나들었던 곳이다. 카페에서 주문한 ${state.selectedCafe.name}은 정말이지 최고였다.`,
            dialogues: ["Je voudrais ..."],
            goals: ["역사적 인물에 대한 소개 이해하기",],
            sceneImage: `${state.selectedCafe.image}`
        },
    ]
}