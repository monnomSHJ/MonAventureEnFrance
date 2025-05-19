import { state } from "./script.js"

export function saveResultToLocalStorage() {
    try {
        localStorage.setItem("userName", state.userName || "-");
        localStorage.setItem("balance", state.balance || "0");
        localStorage.setItem("score", state.score || "0");
        localStorage.setItem("savedVocabList", JSON.stringify(state.savedVocabList || []));

    } catch (err) {
        console.error("오류")
    }
}
