import DataManager from "../data/dataManager"

export default Object.create(null, {
    init: {
        value: function () {
            document.querySelector("#journalSaveButton").addEventListener("click", e => {
                const date = document.querySelector("#journalDate").value
                const concept = document.querySelector("#concepts").value
                const entry = document.querySelector("#journalEntry").value
                const mood = document.querySelector("#mood").value

                DataManager.saveJournalEntry({ date, concept, entry, mood })
                    .then(() => {
                        allEntries.push({ date, concept, entry, mood })
                        renderJournalEntries(allEntries)
                    })
            })
        }
    }
})

