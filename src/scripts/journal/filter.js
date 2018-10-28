import DataManager from "../data/dataManager"
import EntryDOM from "./renderEntries"

export default Object.create(null, {
    init: {
        value: () => {
            document.getElementsByName("moodFilter").forEach(node =>
                node.addEventListener("click", event =>
                    DataManager.getJournalEntries()
                        .then(entries => entries.filter(entry => entry.mood === event.target.value))
                        .then(EntryDOM.render)
                )
            )
        }
    }
})
