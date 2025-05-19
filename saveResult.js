import { state } from "./script.js"

export function saveResultToLocalStorage() {
    try {
        localStorage.setItem("userName", state.userName || "-");
        localStorage.setItem("balance", state.balance || "0");
        localStorage.setItem("score", state.score || "0");

        if (window.dictionary?.entry?.saved) {
            localStorage.setItem("savedVocabList", JSON.stringify(dictionary.entry.saved));
        } else {
            localStorage.setItem("savedVocabList", "[]");
        }
    
    } catch (err) {
        console.error("오류")
    }
}
