let entries = []

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const entriesChanged = new CustomEvent("entryStateChanged")
    eventHub.dispatchEvent(entriesChanged)
}

export const useEntries = () => entries.slice()

export const getJournalEntries = () => {
    return fetch("http://localhost:8088/entries")
        .then(response => response.json())
        .then(data => entries = data)
        .then(dispatchStateChangeEvent)
}

export const saveJournalEntry = (entry) => {
    return fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
        .then(response => response.json())
        .then(getJournalEntries)
}

export const deleteJournalEntry = (id) => {
    return fetch(`http://localhost:8088/entries/${id}`, { method: "DELETE" })
        .then(getJournalEntries)
}
