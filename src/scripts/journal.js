/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Using the DataManager object defined in data.js, you get
    all of the journal entries, then pass them to the
    `renderJournalEntries` function defined in entriesDom.js
*/
let allEntries = []

DataManager.getJournalEntries().then(entries => {
    allEntries = entries
    renderJournalEntries(entries)
})

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
