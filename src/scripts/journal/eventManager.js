import { getSingleJournalEntry, updateSingleJournalEntry, getJournalEntries } from "../data/dataManager"
import { createEntryForm } from "./formManager"
import { renderAllEntries } from "./renderEntries"


export const getAllEditButtons = () => {
    console.log("******** GET ALL THE EDIT BUTTONS   *********")
    const allEditButtons = document.querySelectorAll(".button--edit")
    console.log(allEditButtons)

    for (const btn of allEditButtons) {
        btn.addEventListener(
            "click",
            event => {
                const entryId = event.target.id.split("--")[1]

                // Get the thing
                getSingleJournalEntry(entryId).then(
                    (entryResponseObject) => {
                        // Show form
                        const theForm = createEntryForm("edit")
                        document.querySelector(".container")
                            .innerHTML = theForm

                        // Event listener for update button
                        document.querySelector("#pleaseUpdateForMe")
                            .addEventListener(
                                "click",
                                event => {
                                    const date = document.querySelector("#journalDate").value
                                    const concept = document.querySelector("#concepts").value
                                    const mood = document.querySelector("#mood").value

                                    const id = entryResponseObject.id

                                    updateSingleJournalEntry({ id, date, concept, mood })
                                        .then(getJournalEntries)
                                        .then(renderAllEntries)
                                }
                            )

                        // Populate form
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
