/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
const renderJournalEntries = (entries) => {
    const entriesContainer = document.querySelector(".entryLog")

    entriesContainer.textContent = ""

    for (entry of entries) {
        const entryComponent = makeJournalEntryComponent(entry)
        entriesContainer.innerHTML += entryComponent
    }
}