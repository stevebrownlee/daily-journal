import { Entry as EntryConverter } from "./Entry.js"
import { getJournalEntries, useEntries } from "./EntryDataProvider.js"

const eventHub = document.querySelector(".container")

let entries = []

export const EntryList = () => {
    getJournalEntries()
        .then(() => entries = useEntries())
}

const render = () => {
    const contentTarget = document.querySelector(".entryList")  // Because it doesn't exist in index.html
    contentTarget.innerHTML = entries.map(EntryConverter).join("")
}

eventHub.addEventListener("entryStateChanged", e => {
    entries = useEntries()
    render()
})