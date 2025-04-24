let dictionaryData = [];

async function loadDictionary() {
  const res = await fetch('./data/dictionary.json');
  dictionaryData = await res.json();
  renderDictionaryCards(dictionaryData);
  setupDictionarySearch();
}

export function renderDictionaryCards(data) {
  const list = document.getElementById("dictionary-list");
  list.innerHTML = "";

  data.forEach(entry => {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = entry.french;
    let flipped = false;

    card.addEventListener("click", () => {
      flipped = !flipped;
      card.textContent = flipped ? entry.korean : entry.french;
    });

    list.appendChild(card);
  });
}

export function setupDictionarySearch() {
  const input = document.getElementById("dictionary-search");
  input.addEventListener("input", () => {
    const keyword = input.value.toLowerCase();
    const filtered = dictionaryData.filter(entry =>
      entry.french.toLowerCase().includes(keyword)
    );
    renderDictionaryCards(filtered);
  });
}

// 시작 시 실행
loadDictionary();
