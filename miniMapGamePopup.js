import { updateDialogue, currentScene, currentLineIndex } from "./sceneManager.js";

export function showMiniMapGame(scene, onSuccess, onFail) {
  const { map, start, targets, correctTarget, retryLines } = scene.miniMapGame;

  const container = document.createElement('div');
  container.className = 'popup mini-map-popup';

  let playerPos = { ...start };

  function render() {
    container.innerHTML = '';
    const grid = document.createElement('div');
    grid.className = 'mini-map';

    const viewSize = 6;
    const half = Math.floor(viewSize / 2);

    for (let dy = -half; dy < viewSize - half; dy++) {
      for (let dx = -half; dx < viewSize - half; dx++) {
        const y = playerPos.y + dy;
        const x = playerPos.x + dx;

        const tile = document.createElement('div');
        tile.className = 'tile';
        tile.style.left = `${(dx + half) * 32}px`;
        tile.style.top = `${(dy + half) * 32}px`;

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

    container.appendChild(grid);
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
      document.body.removeChild(container);

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

  document.body.appendChild(container);
  document.addEventListener('keydown', keyHandler);
  render();
}
