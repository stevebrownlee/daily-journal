import { saveJournalEntry, updateSingleJournalEntry, getJournalEntries } from "../data/dataManager"
import { renderAllEntries } from "./renderEntries"

export default Object.create(null, {
    init: {
        value: function () {
            document.querySelector("#journalSaveButton").addEventListener("click", e => {
                const date = document.querySelector("#journalDate").value
                const concept = document.querySelector("#concepts").value
                const entry = document.querySelector("#journalEntry").value
                const mood = document.querySelector("#mood").value
                const id = document.querySelector("#entryId").value

                if (id === "") {
                    saveJournalEntry({ date, concept, entry, mood })
                        .then(getJournalEntries)
                        .then(renderAllEntries)
                } else {
                    updateSingleJournalEntry({ id, date, entry, concept, mood })
                        .then(getJournalEntries)
                        .then(renderAllEntries)
                }
            })
        }
    }
})

