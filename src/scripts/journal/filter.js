import DataManager from "../data/dataManager"
import { renderAllEntries } from "./renderEntries"

export default {
    init: () => {
        document.getElementsByName("moodFilter").forEach(node =>
            node.addEventListener("click", event =>
                DataManager.getJournalEntries()
                    .then(entries => entries.filter(entry => entry.mood === event.target.value))
                    .then(renderAllEntries)
            )
        )
    }
}

