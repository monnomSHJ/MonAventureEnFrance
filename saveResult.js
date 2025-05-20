import { state } from "./script.js"

export function saveResultToLocalStorage() {
    try {
        localStorage.setItem("userName", state.userName || "-");
        localStorage.setItem("balance", state.balance || "0");
        localStorage.setItem("score", state.score || "0");
        localStorage.setItem("savedVocabList", JSON.stringify(state.savedVocabList || []));

        localStorage.setItem("selectedHotelId", state.selectedHotelId || "");
        localStorage.setItem("selectedDish", JSON.stringify(state.selectedDish || {}));
        localStorage.setItem("selectedCafe", JSON.stringify(state.selectedCafe || {}));
        localStorage.setItem("selectedCity", state.selectedCity || "");
        localStorage.setItem("selectedTransport", state.selectedTransport || "");

    } catch (err) {
        console.error("오류")
    }
}
