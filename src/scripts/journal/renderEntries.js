import Factory from "../journal/entryFactory"

const entriesContainer = document.querySelector(".entryLog")

export const render = entry => {
    const entryComponent = Factory.createEntryCard(entry)
    entriesContainer.innerHTML += entryComponent
}

export const renderAllEntries = entries => {
    entriesContainer.textContent = ""

    console.log("******** RENDER ALL THE EDIT THINGS   *********")

    for (const entry of entries) {
        const entryComponent = Factory.createEntryCard(entry)
        entriesContainer.innerHTML += entryComponent
    }
}
