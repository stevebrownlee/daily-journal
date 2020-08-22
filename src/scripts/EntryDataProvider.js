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

export const searchEntries = (term) => {
    return fetch(`http://localhost:8088/entries?q=${term}`)
        .then(response => response.json())
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
    return fetch(`http://localhost:8088/entrytags?entryId=${id}`)
        .then(response => response.json())
        .then((rels) => {
            const relationshipDeletePromises = []

            for (const rel of rels) {
                relationshipDeletePromises.push(
                    fetch(`http://localhost:8088/entrytags/${rel.id}`,
                        {
                            method: "DELETE"
                        }
                    )
                )
            }

            return Promise.all(relationshipDeletePromises)
                .then(() => {
                    return fetch(`http://localhost:8088/entries/${id}`,
                        {
                            method: "DELETE"
                        }
                    )
                        .then(getJournalEntries)
                })

        })
}
