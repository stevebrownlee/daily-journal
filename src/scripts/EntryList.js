import { Entry as EntryConverter } from "./Entry.js"
import { getJournalEntries, searchEntries, useEntries } from "./EntryDataProvider.js"

const eventHub = document.querySelector(".container")

let entries = []

export const EntryList = () => {
    /*
        Don't need to invoke render() here since getJournalEntries()
        triggers a state change event, which is captured below. That
        is when render() gets invoked. This is what React does behind
        the scenes.
    */
    getJournalEntries()
        .then(() => entries = useEntries())
}

const render = (entryArray = null) => {
    if (entryArray === null) {
        entryArray = entries
    }
    const contentTarget = document.querySelector(".entryList")  // Because it doesn't exist in index.html
    contentTarget.innerHTML = entryArray.map(EntryConverter).join("")
}

eventHub.addEventListener("moodCleared", e => {
    entries = useEntries()
    render()
})

eventHub.addEventListener("searchTermChanged", e => {
    searchEntries(e.detail.term).then(render)
})

eventHub.addEventListener("moodSelected", e => {
    const moodEntries = entries.filter(entry => entry.mood === e.detail.mood)
    render(moodEntries)
})

eventHub.addEventListener("entryStateChanged", e => {
    entries = useEntries()
    render()
})