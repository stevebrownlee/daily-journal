import { settings } from "./settings.js";

let tags = []
let entryTags = []

const eventHub = document.querySelector(".container")

const dispatchTagStateChangeEvent = () => eventHub.dispatchEvent(new CustomEvent("tagStateChanged"))
const dispatchEntryTagStateChangeEvent = () => eventHub.dispatchEvent(new CustomEvent("entryTagStateChanged"))

export const useTags = () => tags.slice()
export const useEntryTags = () => entryTags.slice()

export const getTags = () => {
    return fetch(`${settings.apiURL}/tags`)
        .then(response => response.json())
        .then(data => tags = data)
        .then(dispatchTagStateChangeEvent)
}

export const saveTag = (tag) => {
    return fetch(`${settings.apiURL}/tags`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ subject: tag })
    })
        .then(response => response.json())
}

export const findTag = (subject) => {
    return fetch(`${settings.apiURL}/tags?subject=${subject}`)
        .then(response => response.json())
}

export const getEntryTags = () => {
    return fetch(`${settings.apiURL}/entrytags`)
        .then(response => response.json())
        .then(data => entryTags = data)
        .then(dispatchEntryTagStateChangeEvent)
}

export const findEntryTag = (entryId, tagId) => {
    return fetch(`${settings.apiURL}/entrytags?entryId=${entryId}&tagId=${tagId}`)
        .then(response => response.json())
}

export const getTagsForEntry = (entryId) => {
    return fetch(`${settings.apiURL}/entrytags?entryId=${entryId}`)
        .then(response => response.json())
}

export const deleteEntryTag = (id) => {
    return fetch(`${settings.apiURL}/entrytags/${id}`, { "method": "DELETE" })
        .then(response => response.json())
}

export const saveEntryTag = (entryId, tagId) => {
    return fetch(`${settings.apiURL}/entrytags`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ entryId, tagId })
    })
        .then(getEntryTags)
        .then(dispatchEntryTagStateChangeEvent)
}

eventHub.addEventListener("entryStateChanged", e => {
    console.log("****  entryStateChanged detected  ****")
    getTags().then(getEntryTags)
})