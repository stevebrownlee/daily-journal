export const getJournalEntries = () => {
    return fetch("http://localhost:8088/entries")
        .then(response => response.json())
}

export const updateSingleJournalEntry = (entryObject) => {
    return fetch(`http://localhost:8088/entries/${entryObject.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entryObject)
    })
}

export const getSingleJournalEntry = (id) => {
    return fetch(`http://localhost:8088/entries/${id}`)
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
}
