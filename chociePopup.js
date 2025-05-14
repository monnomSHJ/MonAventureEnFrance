import { state } from "./script.js";
import { renderStatusBar } from "./statusBar.js";
import { updateDialogue, currentScene, incrementLineIndex, currentLineIndex, loadScene } from "./sceneManager.js";

export function showChoicePopup(choices) {
    const { prompt } = choices;
    const options = typeof choices.options === "function"
    ? choices.options()
    : choices.options;

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

        if (opt.hidden) {
                return;
        }

        const btn = document.createElement("div");
        btn.className = "popup-content-btn";
        btn.textContent = opt.label;
        btn.dataset.label = opt.label;

        if (opt.disabled) {
            btn.style.pointerEvents = "none";
            btn.style.opacity = "0.4";
        }

        btn.onclick = () => {
            if (opt.disabled) return;
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
    if (line.showChoiceAgain && line.choices) {
        const options = 
            typeof line.choices.options === 'function'
            ? line.choices.options()
            : line.choices.options;

        if (!Array.isArray(options)) {
            console.warn("⚠️ choices.options가 배열이 아닙니다:", options);
            return false;
        }
        showChoicePopup({
            prompt: line.choices.prompt,
            options: options

        });
        return true;
    }
    return false;
}