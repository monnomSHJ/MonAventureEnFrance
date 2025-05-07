import { updateDialogue, currentScene, currentLineIndex, incrementLineIndex } from "./sceneManager.js";
import { state } from "./script.js";
import { renderStatusBar } from "./statusBar.js";

export function showMiniMapGame(scene) {
    const { map, start, correctTargets, mapImg } = scene.miniMapGame;
    let playerPos = { ...start };

    document.querySelectorAll('.mini-map-popup').forEach(p => p.remove());

    const popup = document.createElement('div');
    popup.className = 'popup mini-map-popup';

    popup.innerHTML = `
        <div class="popup-header"><span class="popup-header-title">🚶 길을 찾아가자!</span></div>
        <div class="popup-content">
            <div class="popup-content-text">${scene.miniMapGame.promptText || ''}</div>
            <div class="mini-map-controls">
                <div class="mini-map"></div>
                <div class="direction-buttons">
                    <button class="arrow up" data-dir="up"></button>
                    <div class="left-right">
                        <button class="arrow left" data-dir="left"></button>
                        <button class="arrow right" data-dir="right"></button>
                    </div>
                    <button class="arrow down" data-dir="down"></button>
                </div>
            </div>
        </div> 
    `;

    document.body.appendChild(popup);
    document.querySelector('.overlay')?.classList.add('show');

    const grid = popup.querySelector('.mini-map');

    function render() {
        grid.innerHTML = '';

        if (mapImg) {
            grid.style.backgroundImage = `url('${mapImg}')`;
        }

        const tileSize = 32;
        const viewSize = 10;
        const half = Math.floor(viewSize / 2);
        const gridSize = tileSize * viewSize;

        const bgX = -playerPos.x * tileSize + gridSize / 2;
        const bgY = -playerPos.y * tileSize + gridSize / 2;
        grid.style.backgroundPosition = `${bgX}px ${bgY}px`;



        for (let dy = -half; dy < viewSize - half; dy++) {
            for (let dx = -half; dx < viewSize - half; dx++) {
                const y = playerPos.y + dy;
                const x = playerPos.x + dx;
      
                const tile = document.createElement('div');
                tile.className = 'tile';
                tile.style.left = `${(dx + half) * tileSize}px`;
                tile.style.top = `${(dy + half) * tileSize}px`;
      
                if (y === playerPos.y && x === playerPos.x) {
                    tile.classList.add('player');
                } else if (
                    y >= 0 && y < map.length &&
                    x >= 0 && x < map[0].length
                ) {
                    const cell = map[y][x];
                    if (cell === 'W') tile.classList.add('wall');
                    else if (cell === 'B') tile.classList.add('block');
                    else if (cell === 'T') tile.classList.add('target');
                } else {
                    tile.classList.add('out');
                }

                grid.appendChild(tile);
            }
        }
    }

    function isSame(pos1, pos2) {
        return pos1.x === pos2.x && pos1.y === pos2.y;
    }

    function isCorrectPosition(pos) {
        return correctTargets?.some(target => isSame(target, pos));
    }

    let canMove = true;

    function tryMove(dx, dy) {
        if (!canMove) return;
        
        canMove = false;
        setTimeout(() => canMove = true, 120);

        const newX = playerPos.x + dx;
        const newY = playerPos.y + dy;
        
        if (
            newY < 0 || newY >= map.length ||
            newX < 0 || newX >= map[0].length ||
            map[newY][newX] === 'W' || map[newY][newX] === 'B'
        ) return;
        
        playerPos = { x: newX, y: newY };
        render();
        
        if (map[newY][newX] === 'T') {
            stopAllMovement();
        
            showConfirmPopup((confirmed) => {
                if (!confirmed) {
                    startKeyMovement();
                    return;
                }
        
                document.body.removeChild(popup);
                document.querySelector('.overlay')?.classList.remove('show');
        
                if (isCorrectPosition({ x: newX, y: newY })) {
                    state.score += 5;
                    renderStatusBar();
                    incrementLineIndex();
                    updateDialogue();
                } else {
                    state.score -= 1;
                    renderStatusBar();
                    const feedbackLines = currentScene.retryLines?.map(line => ({
                        speaker: typeof line.speaker === "function" ? line.speaker() : line.speaker,
                        text: line.text,
                        personImg: line.personImg || ""
                    })) || [];

                    const retryLine = {
                        speaker: "",
                        text: "",
                        personImg: "",
                        miniGame: true
                    };

                    currentScene.lines.splice(currentLineIndex + 1, 0, ...feedbackLines, retryLine);
                    incrementLineIndex();
                    updateDialogue();
                }
            });
        }
    }

    const heldKeys = new Set();
    let keyMoveIntervals = {};
    let mouseMoveInterval = null;
    let mouseHeldKey = null;

    function handleKeyDown(e) {
        const key = e.key;
        if (!['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(key)) return;

        e.preventDefault();

        if (heldKeys.has(key)) return;

        const move = () => {
            switch(key) {
                case 'ArrowUp': tryMove(0, -1); break;
                case 'ArrowDown': tryMove(0, 1); break;
                case 'ArrowLeft': tryMove(-1, 0); break;
                case 'ArrowRight': tryMove(1, 0); break;
            }
        };

        heldKeys.add(key);
        move();
        keyMoveIntervals[key] = setInterval(move, 150);
    }

    function handleKeyUp(e) {
        const key = e.key;
        if (heldKeys.has(key)) {
            clearInterval(keyMoveIntervals[key]);
            delete keyMoveIntervals[key];
            heldKeys.delete(key);
        }
    }

    function stopAllMovement() {
        Object.values(keyMoveIntervals).forEach(clearInterval);
        heldKeys.clear();
        Object.keys(keyMoveIntervals).forEach(k => delete keyMoveIntervals[k]);
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keyup', handleKeyUp);

        clearInterval(mouseMoveInterval);
        mouseHeldKey = null;
    }

    function startKeyMovement() {
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);
    }

    const dirToKey = {
        up: 'ArrowUp',
        down: 'ArrowDown',
        left: 'ArrowLeft',
        right: 'ArrowRight'
    }

    const buttons = popup.querySelectorAll('.arrow');
    buttons.forEach(button => {
        const dir = button.dataset.dir;
        const key = dirToKey[dir];

        const move = () => {
            switch (key) {
                case 'ArrowUp': tryMove(0, -1); break;
                case 'ArrowDown': tryMove(0, 1); break;
                case 'ArrowLeft': tryMove(-1, 0); break;
                case 'ArrowRight': tryMove(1, 0); break;
            }
        };

        const start = () => {
            if (heldKeys.has(key)) return;
            heldKeys.add(key);
            move();
            keyMoveIntervals[key] = setInterval(move, 150);
        };

        const stop = () => {
            clearInterval(mouseMoveInterval);
            mouseHeldKey = null;
        };

        button.addEventListener('mousedown', start);
        button.addEventListener('touchstart', start);
        button.addEventListener('mouseup', stop);
        button.addEventListener('mouseleave', stop);
        button.addEventListener('touchend', stop);
    });

    render();
    startKeyMovement();

}

function showConfirmPopup(callback) {
    const confirm = document.createElement('div');
    confirm.className = 'popup';
    confirm.innerHTML = `
        <div class="popup-header"><span class="popup-header-title">목적지 확인</span></div>
        <div class="popup-content">
            <div class="popup-content-text">이 곳으로 결정하시겠습니까?</div>
            <div class="popup-content-btn-group">
                <div class="popup-content-btn" id="yes">예</div>
                <div class="popup-content-btn" id="no">아니오</div>
            </div>
        </div>`;
    document.body.appendChild(confirm);
  
    confirm.querySelector('#yes').onclick = () => {
        document.body.removeChild(confirm);
        callback(true);
    };

    confirm.querySelector('#no').onclick = () => {
        document.body.removeChild(confirm);
        callback(false);
    };
}