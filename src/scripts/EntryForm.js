import { saveJournalEntry, useEntries } from "./EntryDataProvider.js"
import { findTag, saveEntryTag, saveTag } from "./TagsProvider.js"

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", e => {
    if (e.target.id === "journalSaveButton") {
        const concept = document.querySelector("#entryForm__concepts").value
        const entry = document.querySelector("#entryForm__entry").value
        const mood = document.querySelector("#entryForm__mood").value
        const tags = document.querySelector("#entryForm__tags").value.split(",")
        const date = Date.now()

        saveJournalEntry({
            date, concept, entry, mood, date
        })
            .then(() => {
                const newEntry = useEntries().pop()
                for (const tag of tags) {
                    findTag(tag)
                        .then(matches => {
                            let matchingTag = null

                            if (matches.length > 0) {
                                matchingTag = matches[0].id
                            }

                            if (matchingTag === null) {
                                saveTag(tag)
                                    .then(new_tag => {
                                        saveEntryTag(newEntry.id, new_tag.id)
                                    })
                            }
                            else {
                                saveEntryTag(newEntry.id, matchingTag)
                            }
                        })
                }
            })
    }
})


export const EntryForm = () => {
    return `
        <h1>Daily Journal</h1>
        <form class="entryForm">
            <fieldset class="fieldset">
                <label for="concepts">Concepts covered</label>
                <input type="text" name="concepts" id="entryForm__concepts">
            </fieldset>
            <fieldset class="fieldset">
                <label for="journalEntry">Journal Entry</label>
                <textarea name="journalEntry" id="entryForm__entry"></textarea>
            </fieldset>
            <fieldset class="fieldset">
                <label for="tags">Tags</label>
                <input name="tags" id="entryForm__tags"></textarea>
            </fieldset>
            <fieldset class="fieldset">
                <label for="journalDate">Mood for the day</label>
                <select name="mood" id="entryForm__mood">
                    <option value="sad">Sad</option>
                    <option value="ok">Ok</option>
                    <option value="happy">Happy</option>
                </select>
            </fieldset>
        </form>
        <button id="journalSaveButton">Record Journal Entry</button>
    `
}