import { getSceneSummaries } from './sceneSummary.js';

window.addEventListener("DOMContentLoaded", () => {

    const userName = localStorage.getItem("userName") || "-";
    const balance = localStorage.getItem("balance") || "0";
    const score = localStorage.getItem("score") || "0";

    const vocabList = JSON.parse(localStorage.getItem("savedVocabList") || "[]");

    const finalScore = parseInt(score) + Math.floor(parseInt(balance) / 2);

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
    const sceneSummaries = getSceneSummaries();
    sceneSummaries.forEach(scene => {
        const sceneElement = document.createElement("div");
        sceneElement.classList.add("scene")

        const textContainer = document.createElement("div");
        textContainer.classList.add("scene-text");

        const title = document.createElement("h3");
        title.textContent = scene.sceneTitle;
        textContainer.appendChild(title);

        const description = document.createElement("p");
        description.textContent = scene.description;
        textContainer.appendChild(description);

        if (scene.dialogues && scene.dialogues.length > 0) {
            const dialogueList = document.createElement("ul");
            dialogueList.classList.add("dialogueList");
            scene.dialogues.forEach(d => {
                const li = document.createElement("li");
                li.textContent = d;
                dialogueList.appendChild(li);
            });
            textContainer.appendChild(dialogueList);
        }

        if (scene.goals && scene.goals.length > 0) {
            const goalList = document.createElement("ul");
            goalList.classList.add("goalList");
            scene.goals.forEach(g => {
                const li = document.createElement("li");
                li.textContent = g;
                goalList.appendChild(li);
            });
            textContainer.appendChild(goalList);
        }

        sceneElement.appendChild(textContainer);

        const imageContainer = document.createElement("div");
        imageContainer.classList.add("scene-image");
        const img = document.createElement("img");
        img.src = scene.sceneImage;
        img.alt = scene.sceneTitle;
        imageContainer.appendChild(img);
        sceneElement.appendChild(imageContainer);

        sceneContainer.appendChild(sceneElement);
    });
});