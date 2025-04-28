console.log("dictionary.js 로드됨");

let dictionaryData = [];

export async function loadDictionary() {
  console.log("loadDictionary() 호출됨");

  try {
    const res = await fetch('./data/dictionary.json');
    if (!res.ok) throw new Error('dictionary.json fetch 실패!');

    dictionaryData = await res.json();
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
