import { getSingleJournalEntry, updateSingleJournalEntry, getJournalEntries } from "../data/dataManager"
import { createEntryForm } from "./formManager"
import { renderAllEntries } from "./renderEntries"

export const getAllEditButtons = () => {
    const allEditButtons = document.querySelectorAll(".button--edit")

    for (const btn of allEditButtons) {
        btn.addEventListener(
            "click",
            event => {
                const [prompt, entryId] = event.target.id.split("--")

                getSingleJournalEntry(entryId).then(
                    (entryResponseObject) => {
                        document.querySelector("#entryId").value = entryId
                        document.querySelector("#journalDate").value = entryResponseObject.date
                        document.querySelector("#concepts").value = entryResponseObject.concept
                        document.querySelector("#journalEntry").value = entryResponseObject.entry
                        document.querySelector("#mood").value = entryResponseObject.mood
                    }
                )
            }
        )
    }
}



export default {}
