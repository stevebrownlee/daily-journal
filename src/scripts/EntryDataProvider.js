import { settings } from "./settings.js";

let entries = []
let domain = settings.apiURL

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const entriesChanged = new CustomEvent("entryStateChanged")
    eventHub.dispatchEvent(entriesChanged)
}

export const useEntries = () => entries.slice()

export const getJournalEntries = () => {
    return fetch(`${domain}/entries`)
        .then(response => response.json())
        .then(data => entries = data)
        .then(dispatchStateChangeEvent)
}

export const getJournalEntry = (id) => {
    return fetch(`${domain}/entries/${id}`)
        .then(response => response.json())
}

export const searchEntries = (term) => {
    return fetch(`${domain}/entries?q=${term}`)
        .then(response => response.json())
}

export const saveJournalEntry = (entry) => {
    return fetch(`${domain}/entries`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
        .then(response => response.json())
        .then(newEntry => {
            getJournalEntries()
            return newEntry
        })
}

export const updateJournalEntry = (entry) => {
    return fetch(`${domain}/entries/${entry.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entry)
    })
        .then(response => response.json())
        .then(getJournalEntries)
}

export const deleteJournalEntry = async (id) => {
    const relationshipDeletePromises = []

    const response = await fetch(`${domain}/entrytags?entryId=${id}`)
    const rels = await response.json()

    for (const rel of rels) {
        relationshipDeletePromises.push(
            fetch(`${domain}/entrytags/${rel.id}`, { method: "DELETE" })
        )
    }

    await Promise.all(relationshipDeletePromises)

    const result = await fetch(`${domain}/entries/${id}`, { method: "DELETE" })

    return getJournalEntries(result)
}
