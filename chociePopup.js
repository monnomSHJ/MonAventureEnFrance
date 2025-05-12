import { state } from "./script.js";
import { renderStatusBar } from "./statusBar.js";
import { updateDialogue, currentScene, incrementLineIndex, currentLineIndex, loadScene } from "./sceneManager.js";

let previousChoiceData = null;

export function showChoicePopup(choices) {
    const { prompt, options } = choices;
    previousChoiceData = choices;

    const popup = document.createElement("div");
    popup.className = "popup choice-popup";

    popup.innerHTML = `
        <div class="popup-header"><span class="popup-header-title">🗨️ 선택하자!</span?></div>
        <div class="popup-content">
            <div class="popup-content-text">${prompt}</div>
            <div class="popup-content-btn-group column"></div>
        </div>
    `;

    const btnGroup = popup.querySelector(".popup-content-btn-group");

    options.forEach((opt) => {
        const btn = document.createElement("div");
        btn.className = "popup-content-btn";
        btn.textContent = opt.label;
        btn.dataset.label = opt.label;

        btn.onclick = () => {
            document.body.removeChild(popup);
            document.querySelector('.overlay')?.classList.remove('show');

            if (typeof opt.customAction === 'function') {
                opt.customAction();
            }

            if (opt.scoreDelta) {
                state.score += opt.scoreDelta;
                renderStatusBar?.();
            }

            const insert = typeof opt.insertLines === 'function' ? opt.insertLines() : (opt.insertLines || []);
            if (insert.length) {
                currentScene.lines.splice(currentLineIndex + 1, 0, ... insert);
            }

            incrementLineIndex();
            updateDialogue();
        };

        btnGroup.appendChild(btn);
    });

    document.body.appendChild(popup);
    document.querySelector('.overlay')?.classList.add('show');
}

export function maybeShowChoiceAgain(line) {
    if (line.showChoiceAgain && previousChoiceData) {
        showChoicePopup(previousChoiceData);
        return true;
    }
    return false;
}