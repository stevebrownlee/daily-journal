import { Entry as EntryConverter } from "./Entry.js"
import { getJournalEntries, searchEntries, useEntries } from "./EntryDataProvider.js"
import { getEntryTags, getTags, useEntryTags, useTags } from "./TagsProvider.js"

const eventHub = document.querySelector(".container")

let entries = []
let tags = []
let entryTagRelationships = []

export const EntryList = () => {
    /*
        Don't need to invoke render() here since getJournalEntries()
        triggers a state change event, which is captured below. That
        is when render() gets invoked. This is what React does behind
        the scenes.
    */
    getEntryTags()
        .then(nil => entryTagRelationships = useEntryTags())
        .then(getTags)
        .then(nil => tags = useTags())
        .then(getJournalEntries)
}

const render = (entryArray = null) => {
    console.log("****  Rendering entries  ****")

    // A subset can be passed as a parameter when user is filtering
    entryArray = entryArray ?? entries

    // Because it doesn't exist in index.html
    const contentTarget = document.querySelector(".entryList")

    // Traverse data relationships to get `tags` property on each entry
    contentTarget.innerHTML = entryArray.map(entry => {
        const intersections = entryTagRelationships.filter(r => r.entryId === entry.id)
        entry.tags = intersections.map(r => tags.find(t => t.id === r.tagId))

        return EntryConverter(entry)
    }).join("")
}

eventHub.addEventListener("moodCleared", e => {
    entries = useEntries()
    render()
})

eventHub.addEventListener("searchTermChanged", e => {
    searchEntries(e.detail.term).then(results => {
        entries = results
        render()
    })
})

eventHub.addEventListener("moodSelected", e => {
    entries = useEntries().filter(entry => entry.mood === e.detail.mood)
    render()
})

eventHub.addEventListener("entryTagStateChanged", e => {
    console.log("**** entryTagStateChanged detected  ****")
    entries = useEntries()
    entryTagRelationships = useEntryTags()
    tags = useTags()
    render()
})

eventHub.addEventListener("entryStateChanged", e => {
    console.log("**** entryStateChanged detected  ****")
    entries = useEntries()
    render()
})
