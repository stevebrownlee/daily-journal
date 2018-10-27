import DataManager from "./data"

DataManager.getJournalEntries().then(entries => {
    console.log(entries)
})