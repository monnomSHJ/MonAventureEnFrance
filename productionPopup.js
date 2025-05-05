import { state } from "./script.js";
import { renderStatusBar } from "./statusBar.js";
import { updateDialogue, currentScene, incrementLineIndex, currentLineIndex } from "./sceneManager.js";

let lastProductionData = null;

export function showProductionPopup(data) {
    lastProductionData = data;
  
    const { prompt, meaning, words, answer } = data;
    document.querySelectorAll('.production-popup').forEach(p => p.remove());
  
    const popup = document.createElement("div");
    popup.className = "popup production-popup";
  
    const blankCount = (prompt.match(/_/g) || []).length;
    let blankCounter = 0;
    const promptHTML = prompt.replace(/_/g, () => {
        return `<span class="fill-blank" data-index="${blankCounter++}"></span>`;
    });
  
    popup.innerHTML = `
        <div class="popup-header"><span class="popup-header-title">문장을 완성하자!</span></div>
        <div class="popup-content">
            <div class="popup-production-prompt">${promptHTML}</div>
            <div class="popup-production-meaning">${meaning}</div>
            <div class="popup-production-choices">
                ${words.map(word => `<button class="choice-button">${word}</button>`).join("")}
            </div>
        <button class="button popup-production-confirm" disabled>제출</button>
    </div>
    `;
  
    document.body.appendChild(popup);
  
    const blanks = popup.querySelectorAll('.fill-blank');
    const choiceButtons = popup.querySelectorAll('.choice-button');
    const confirmBtn = popup.querySelector('.popup-production-confirm');
  
    const selectedWords = new Array(blankCount).fill(null);
  
    choiceButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const word = btn.textContent;
            const emptyIndex = selectedWords.findIndex(w => w === null);
            if (emptyIndex === -1) return;
    
            selectedWords[emptyIndex] = word;
            blanks[emptyIndex].textContent = word;
            blanks[emptyIndex].classList.add('filled');
            btn.disabled = true;
    
            checkConfirmState();
        });
    });
  
    blanks.forEach((blank, index) => {
        blank.addEventListener('click', () => {
            const word = selectedWords[index];
            if (!word) return;
  
            selectedWords[index] = null;
            blank.textContent = '';
            blank.classList.remove('filled');
  
            choiceButtons.forEach(btn => {
                if (btn.textContent === word) btn.disabled = false;
            });
  
            checkConfirmState();
        });
    });
  
    function checkConfirmState() {
        confirmBtn.disabled = selectedWords.includes(null);
    }
  
    confirmBtn.addEventListener('click', () => {
        document.querySelectorAll('.production-popup').forEach(p => p.remove());
        document.querySelector('.overlay')?.classList.remove('show');
  
        const isCorrect = JSON.stringify(selectedWords) === JSON.stringify(answer);

        console.log("현재 currentLineIndex:", currentLineIndex);
  
        if (isCorrect) {
            state.score += 5;
            renderStatusBar();
            incrementLineIndex();

            console.log("정답 제출 후 currentLineIndex:", currentLineIndex);
            updateDialogue();
        } else {
            state.score -= 1;
            const feedbackLines = currentScene.retryLines?.map(line => ({
            speaker: typeof line.speaker === "function" ? line.speaker() : line.speaker,
            text: line.text,
            personImg: line.personImg || ""
        })) || [];

        const retryLine = {
            speaker: "",
            text: "",
            personImg: "",
            production: lastProductionData
        };
  
        currentScene.lines.splice(currentLineIndex + 1, 0, ...feedbackLines, retryLine);
        incrementLineIndex();

        console.log("오답 처리 후 currentLineIndex:", currentLineIndex);
        updateDialogue();
        }
    });
}
  
export function getLastProductionData() {
return lastProductionData;
}
  