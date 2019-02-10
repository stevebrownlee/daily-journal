import Factory from "../journal/entryFactory"

const entriesContainer = document.querySelector(".entryLog")

export default Object.create(null, {
    render: {
        value: entries => {
            entriesContainer.textContent = ""

            for (const entry of entries) {
                const entryComponent = Factory.createEntryCard(entry)
                entriesContainer.innerHTML += entryComponent
            }
        }
    }
})