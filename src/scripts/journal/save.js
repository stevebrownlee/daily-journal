import DataManager from "../data/dataManager"
import EntryDOM from "./renderEntries"

export default Object.create(null, {
    init: {
        value: function () {
            document.querySelector("#journalSaveButton").addEventListener("click", e => {
                // Collect user input
                const date = document.querySelector("#journalDate").value
                const concept = document.querySelector("#concepts").value
                const entry = document.querySelector("#journalEntry").value
                const mood = document.querySelector("#mood").value

                // Save journal entry (json-server returns it) then render it
                DataManager.saveJournalEntry({ date, concept, entry, mood })
                    .then(DataManager.getJournalEntries)
                    .then(EntryDOM.renderAll)
            })
        }
    }
})

