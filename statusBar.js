import { state } from "./script.js";
import quests from "./quest.js";

export function renderStatusBar() {
  const statusBar = document.querySelector('.status-bar');
  if (!statusBar) return;

  const statusItems = statusBar.querySelectorAll('.status-item');
  statusItems[0].querySelector('.value').textContent = state.userName;
  statusItems[1].querySelector('.value').textContent = `${state.balance} 유로`;
  statusItems[2].querySelector('.value').textContent = `${state.score} 점`;
}

export function renderQuest() {
  const questTitle = document.querySelector('.quest-title');
  const questList = document.querySelector('.quest-list');
  const current = state.currentQuest;
  const questData = quests[current];

  if (!questData) {
    questTitle.textContent = "📌 현재 퀘스트가 없습니다.";
    questList.innerHTML = "다음 퀘스트를 기다려주세요!";
    return;
  }

  questTitle.textContent = questData.title;
  questList.innerHTML = questData.tasks.map(task => `<div>${task}</div>`).join('');
}