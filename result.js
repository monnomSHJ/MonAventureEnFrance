window.addEventListener("DOMContentLoaded", () => {

    const userName = localStorage.getItem("userName") || "-";
    const balance = parseFloat(localStorage.getItem("balance")) || 0;
    const score = parseFloat(localStorage.getItem("score")) || 0;
    const vocabList = JSON.parse(localStorage.getItem("savedVocabList") || "[]");
    const travelPath = JSON.parse(localStorage.getItem("travelPath") || "[]");
    const sceneSummaries = JSON.parse(localStorage.getItem("sceneSummaries") || "[]");

    const finalScore = Math.round(score + balance * 0.5);

    document.getElementById("user-name").textContent = userName;
    document.getElementById("user-balance").textContent = balance.toFixed(2);
    document.getElementById("user-score").textContent = score.toFixed(1);
    document.getElementById("total-score").textContent = finalScore;

    const vocabContainer = document.getElementById("vocab-items");
    vocabList.forEach(word => {
        const li = document.createElement("li");
        li.textContent = word;
        vocabContainer.appendChild(li);
    });

    const travelContainer = document.getElementById("travel-steps");
    travelPath.forEach(step => {
        const li = document.createElement("li");
        li.textContent = step;
        travelContainer.appendChild(li);
    });

    const scenesContainer = document.getElementById("scenes");
    sceneSummaries.forEach(scene => {
        const div = document.createElement("div");
        div.className = "scene-summary-block";
        div.innerHTML = `
        <h3>${scene.title || "Scène"}</h3>
        <p><strong>🗣 대화:</strong> ${scene.dialogue || "-"}</p>
        <p><strong>🎎 문화 요소:</strong> ${scene.culture || "-"}</p>
        <p><strong>💬 표현:</strong> ${scene.expressions || "-"}</p>
        `;
        scenesContainer.appendChild(div);
    });
});