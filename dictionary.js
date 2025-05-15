console.log("dictionary.js 로드됨");

let dictionaryData = [];
let showingAllWords = true;

export async function loadDictionary() {
  console.log("loadDictionary() 호출됨");

  try {
    const res = await fetch('./data/dictionary.json');
    if (!res.ok) throw new Error('dictionary.json fetch 실패!');

    dictionaryData = await res.json().then(data =>
      data.map(entry => ({ ...entry, saved: false }))
    );
    console.log("불러온 dictionaryData:", dictionaryData);

    renderDictionaryCards(dictionaryData);
    setupDictionarySearch();
  } catch (error) {
    console.error("❌ dictionary.json 로딩 실패:", error);
  }
}

export function renderDictionaryCards(data) {
  const list = document.getElementById("dictionary-list");
  list.innerHTML = "";

  data.forEach(entry => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <span class = "word">${entry.french}</span>
      <button class="save-btn ${entry.saved ? 'save-filled' : 'save-empty'}"></button>
    `;

    let flipped = false;
    const wordElement = card.querySelector('.word');
    const saveButton = card.querySelector('.save-btn');

    wordElement.addEventListener("click", () => {
      flipped = !flipped;
      wordElement.textContent = flipped ? entry.korean : entry.french;
    });

    saveButton.addEventListener('click', (event) => {
      event.stopPropagation();
      entry.saved = !entry.saved;
      saveButton.className = `save-btn ${entry.saved ? 'save-filled' : 'save-empty'}`;
      console.log(`단어 "${entry.french}"이(가) 저장되었습니다.`);
      updateDictionaryView();
    })

    list.appendChild(card);
  });
}

export function setupDictionarySearch() {
  const input = document.getElementById("dictionary-search");
  input.addEventListener("input", () => {
    const keyword = input.value.toLowerCase();
    const searchTarget = showingAllWords ? dictionaryData : dictionaryData.filter(entry => entry.saved);
    const filtered = searchTarget.filter(entry =>
      entry.french.toLowerCase().includes(keyword)
    );
    renderDictionaryCards(filtered);
  });
}

const savedList = document.getElementById('dictionary-saved-list');
const toggleButton = document.getElementById('toggle-saved-words');

function updateDictionaryView() {
  if (showingAllWords) {
    renderDictionaryCards(dictionaryData);
  } else {
    renderDictionaryCards(dictionaryData.filter(entry => entry.saved));
  }

  updateToggleButtonAppearance();
}

function updateToggleButtonAppearance() {
  toggleButton.className = showingAllWords ? 'show-saved-btn' : 'show-all-btn';
}

function setupToggleSavedWordsButton() {
  toggleButton.addEventListener('click', () => {
    showingAllWords = !showingAllWords;
    updateDictionaryView();
  });
}

// 시작 시 실행
loadDictionary().then(() => {
    setupToggleSavedWordsButton();
    updateDictionaryView();
});