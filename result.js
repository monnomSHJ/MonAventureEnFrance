import { sceneSummaries as predefinedScenes } from "./sceneSummary.js";

window.addEventListener("DOMContentLoaded", () => {

    const userName = localStorage.getItem("userName") || "-";
    const balance = localStorage.getItem("balance") || "0";
    const score = localStorage.getItem("score") || "0";

    const vocabList = JSON.parse(localStorage.getItem("savedVocabList") || "[]");

    const finalScore = Math.round(score + balance * 0.5);

    document.getElementById("user-name").textContent = userName;
    document.getElementById("user-balance").textContent = balance
    document.getElementById("user-score").textContent = score;
    document.getElementById("total-score").textContent = finalScore;

    const vocabContainer = document.getElementById("vocab-items");
    vocabList.forEach(word => {
        const li = document.createElement("li");
        li.textContent = word;
        vocabContainer.appendChild(li);
    });

    const sceneContainer = document.getElementById("scenes");
    predefinedScenes.forEach(scene => {
        const block = document.createElement("div");
        block.className = "scene-summary-block";

        block.innerHTML = `
            <div class="scene-description">
                <h3>${scene.sceneTitle}</h3>
                <p>${scene.description}</p>
                ${scene.dialogues ? `<p><strong>🗨️ </strong> ${scene.dialogues.join(", ")}</p>` : ""}
                ${scene.goals ? `<ul>${scene.goals.map(g => `<li>${g}</li>`).join("")}</ul>` : ""}
            </div>
            <div class="scene-image" style="background-image: url('${scene.sceneImage}')"></div>
        `;

        sceneContainer.appendChild(block);
    });
});