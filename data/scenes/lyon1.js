import { state } from "../../script.js";
import { overlay, loadScene } from "../../sceneManager.js";
import { renderQuest, renderStatusBar } from "../../statusBar.js";
import { lyonTransportData } from "../transportData.js";


export function getLyon1Scene() {

    return {
        id: "lyon1",
        background_img: "",
        narration: "",
        lines: [],
        contentHTML: `
            <div class="transport-content-wrap">
                <div class="transport-card-container">
                    ${lyonTransportData.map(transport => `
                        <div class="transport-card" data-id="${transport.id}">
                            <div class="transport-card-content">
                                <div class="transport-card-title">${transport.name}</div>
                                <hr>
                                ${transport.descriptionLines.map(line => `
                                    <div class="transport-card-discription">${line}</div>
                                    `).join("")}
                                <hr>
                                <div class="transport-card-plus">${transport.plus}</div>
                            </div>
                            <button class="transport-card-select button" data-id="${transport.id}">선택하기</button>
                        </div>
                    `).join("")}
                </div>

                <div class="transport-confirm-wrap">
                    <button id="confirm-transport" class="confirm-transport button" disabled>예약 완료</button>
                </div>
            </div>
        `,
    }
}
