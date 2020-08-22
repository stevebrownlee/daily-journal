let tags = []

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const tagsChanged = new CustomEvent("tagStateChanged")
    eventHub.dispatchEvent(tagsChanged)
}

export const useTags = () => tags.slice()

export const getTags = () => {
    return fetch("http://localhost:8088/tags")
        .then(response => response.json())
        .then(data => tags = data)
        .then(dispatchStateChangeEvent)
}

export const saveTag = (tag) => {
    return fetch("http://localhost:8088/tags", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ subject: tag })
    })
        .then(response => response.json())
}

export const findTag = (subject) => {
    return fetch(`http://localhost:8088/tags?subject=${subject}`)
        .then(response => response.json())
}

export const getEntryTags = (entryId) => {
    return fetch(`http://localhost:8088/entrytags?entryId=${entryId}`)
        .then(response => response.json())
}

export const deleteEntryTag = (id) => {
    return fetch(`http://localhost:8088/entrytags/${id}`, { "method": "DELETE" })
        .then(response => response.json())
}

export const saveEntryTag = (entryId, tagId) => {
    return fetch("http://localhost:8088/entrytags", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ entryId, tagId })
    })
        .then(response => response.json())
}

