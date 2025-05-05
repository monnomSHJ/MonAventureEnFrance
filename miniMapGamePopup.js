import { updateDialogue, currentScene, currentLineIndex } from "./sceneManager.js";

export function showMiniMapGame(scene, onSuccess, onFail) {
    const { map, start, correctTarget, retryLines, mapImg } = scene.miniMapGame;
    let playerPos = { ...start };

    document.querySelectorAll('.mini-map-popup').forEach(p => p.remove());

    const popup = document.createElement('div');
    popup.className = 'popup mini-map-popup';

    popup.innerHTML = `
        <div class="popup-header"><span class="popup-header-title">길을 찾아가자!</span></div>
        <div class="popup-content">
            <div class="popup-content-text">울라랄랄라라라ㅏ라라라라</div>
            <div class="mini-map"></div>
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

    function tryMove(dx, dy) {
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
            document.removeEventListener('keydown', keyHandler);
        
            showConfirmPopup((confirmed) => {
                if (!confirmed) {
                    document.addEventListener('keydown', keyHandler);
                    return;
                }
        
                document.body.removeChild(popup);
                document.querySelector('.overlay')?.classList.remove('show');
        
                if (isSame({ x: newX, y: newY }, correctTarget)) {
                    onSuccess();
                } else {
                    if (retryLines) {
                        const feedback = retryLines.map(line => ({
                            speaker: typeof line.speaker === 'function' ? line.speaker() : line.speaker,
                            text: line.text,
                            personImg: line.personImg || ''
                        })).concat({ productionRetry: true });
        
                        currentScene.lines.splice(currentLineIndex + 1, 0, ...feedback);
                        currentLineIndex++;
                        updateDialogue();
                    } else {
                        onFail();
                    }
                }
            });
        }
    }

    function keyHandler(e) {
        switch (e.key) {
            case 'ArrowUp': return tryMove(0, -1);
            case 'ArrowDown': return tryMove(0, 1);
            case 'ArrowLeft': return tryMove(-1, 0);
            case 'ArrowRight': return tryMove(1, 0);
        }
    }

    document.addEventListener('keydown', keyHandler);
    render();
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