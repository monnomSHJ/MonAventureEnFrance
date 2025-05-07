import { state } from "../../script.js";
import { renderQuest } from "../../statusBar.js";
import { getHotel5Scene } from "./hotel5.js";

export function getHotel4Scene() {

    return {
        id: "hotel4",
        background_img: "assets/images/hotelRoomBg.jpg",
        narration: "",
        retryLines: [],
        lines: [
            { speaker: `👤 ${state.userName}`, text: `이제 짐 좀 풀고... 잠깐 쉬어볼까.` },
            { speaker: `👤 ${state.userName}`, text: `그러고보니 직원 분이 숙소에 관한 주의사항을 이야기해주셨지?` },
            { speaker: `👤 ${state.userName}`, text: `뭐라고 하셨더라... 다시 한번 정리해보자.` },
            { speaker: `📢`, text: `깜짝 퀴즈! 여러분이 집중 잘하고 있는지 확인해보겠습니다.` },
            { speaker: `📢`, text: `아마 다 맞힐 수 있을 거라고 생각해요. 😉` },
            { speaker: ``, text: ``,
                choices: {
                    prompt: "🥐 조식은 몇 시까지 제공되나요?",
                    options: [
                        {
                            label: "07:00",
                            scoreDelta: -1,
                            insertLines: [
                                { speaker: `📢`, text: `아쉽네요! 조식은 9시까지 제공됩니다. 1점이 차감되었습니다.` },
                                { speaker: `📢`, text: `"Le petit déjeuner est servi jusqu'à 9 heures."` },
                            ]
                        },
                        {
                            label: "09:00",
                            scoreDelta: +3,
                            insertLines: [
                                { speaker: `📢`, text: `정답입니다! 조식은 9시까지 제공됩니다. 3점이 추가되었습니다.` },
                                { speaker: `📢`, text: `"Le petit déjeuner est servi jusqu'à 9 heures."` },
                            ]
                        },
                        {
                            label: "11:00",
                            scoreDelta: -1,
                            insertLines: [
                                { speaker: `📢`, text: `아쉽네요! 조식은 9시까지 제공됩니다. 1점이 차감되었습니다.` },
                                { speaker: `📢`, text: `"Le petit déjeuner est servi jusqu'à 9 heures."` },
                            ]
                        },
                        {
                            label: "20:00",
                            scoreDelta: -1,
                            insertLines: [
                                { speaker: `📢`, text: `아쉽네요! 조식은 9시까지 제공됩니다. 1점이 차감되었습니다.` },
                                { speaker: `📢`, text: `"Le petit déjeuner est servi jusqu'à 9 heures."` },
                            ]
                        },
                        {
                            label: "22:00",
                            scoreDelta: -1,
                            insertLines: [
                                { speaker: `📢`, text: `아쉽네요! 조식은 9시까지 제공됩니다. 1점이 차감되었습니다.` },
                                { speaker: `📢`, text: `"Le petit déjeuner est servi jusqu'à 9 heures."` },
                            ]
                        }
                    ]
                }
             },
             { speaker: ``, text: ``,
                choices: {
                    prompt: "🤫 몇 시부터 소음을 자제해야 하나요?",
                    options: [
                        {
                            label: "07:00",
                            scoreDelta: -1,
                            insertLines: [
                                { speaker: `📢`, text: `아쉽네요! 22시부터 소음을 자제해야 합니다. 1점이 차감되었습니다.` },
                                { speaker: `📢`, text: `"Et n'oubliez pas : pas de bruit après 22 heueres."` },
                            ]
                        },
                        {
                            label: "09:00",
                            scoreDelta: -1,
                            insertLines: [
                                { speaker: `📢`, text: `아쉽네요! 22시부터 소음을 자제해야 합니다. 1점이 차감되었습니다.` },
                                { speaker: `📢`, text: `"Et n'oubliez pas : pas de bruit après 22 heueres."` },
                            ]
                        },
                        {
                            label: "11:00",
                            scoreDelta: -1,
                            insertLines: [
                                { speaker: `📢`, text: `아쉽네요! 22시부터 소음을 자제해야 합니다. 1점이 차감되었습니다.` },
                                { speaker: `📢`, text: `"Et n'oubliez pas : pas de bruit après 22 heueres."` },
                            ]
                        },
                        {
                            label: "20:00",
                            scoreDelta: -1,
                            insertLines: [
                                { speaker: `📢`, text: `아쉽네요! 22시부터 소음을 자제해야 합니다. 1점이 차감되었습니다.` },
                                { speaker: `📢`, text: `"Et n'oubliez pas : pas de bruit après 22 heueres."` },
                            ]
                        },
                        {
                            label: "22:00",
                            scoreDelta: +3,
                            insertLines: [
                                { speaker: `📢`, text: `정답입니다! 22시부터 소음을 자제해야 합니다. 3점이 추가되었습니다.` },
                                { speaker: `📢`, text: `"Et n'oubliez pas : pas de bruit après 22 heueres."` },
                            ]
                        },
                    ]
                }
             },
             { speaker: ``, text: ``,
                choices: {
                    prompt: "🚪 퇴실은 몇 시까지 해야 하나요?",
                    options: [
                        {
                            label: "07:00",
                            scoreDelta: -1,
                            insertLines: [
                                { speaker: `📢`, text: `아쉽네요! 퇴실은 11시까지 해야 합니다. 1점이 차감되었습니다.` },
                                { speaker: `📢`, text: `"Et le départ doit se fait avant 11 heures."` },
                            ]
                        },
                        {
                            label: "09:00",
                            scoreDelta: -1,
                            insertLines: [
                                { speaker: `📢`, text: `아쉽네요! 퇴실은 11시까지 해야 합니다. 1점이 차감되었습니다.` },
                                { speaker: `📢`, text: `"Et le départ doit se fait avant 11 heures."` },
                            ]
                        },
                        {
                            label: "11:00",
                            scoreDelta: +3,
                            insertLines: [
                                { speaker: `📢`, text: `정답입니다! 퇴실은 11시까지 해야 합니다. 3점이 추가되었습니다.` },
                                { speaker: `📢`, text: `"Et le départ doit se fait avant 11 heures."` },
                            ]
                        },
                        {
                            label: "20:00",
                            scoreDelta: -1,
                            insertLines: [
                                { speaker: `📢`, text: `아쉽네요! 퇴실은 11시까지 해야 합니다. 1점이 차감되었습니다.` },
                                { speaker: `📢`, text: `"Et le départ doit se fait avant 11 heures."` },
                            ]
                        },
                        {
                            label: "22:00",
                            scoreDelta: -1,
                            insertLines: [
                                { speaker: `📢`, text: `아쉽네요! 퇴실은 11시까지 해야 합니다. 1점이 차감되었습니다.` },
                                { speaker: `📢`, text: `"Et le départ doit se fait avant 11 heures."` },
                            ]
                        },
                    ]
                }
             },
             { speaker: `📢`, text: `🥳 퀴즈는 여기까지! 고생 많으셨습니다.` },
             { speaker: `👤 ${state.userName}`, text: `호텔 규칙도 다시 한번 확인했으니, 조금 쉬다가 밖에 나가보자.` }
        ],
        
        nextScene: () => {
            state.currentQuest = "장소 추천";
            renderQuest();
            return getHotel5Scene();
        }
    }
}