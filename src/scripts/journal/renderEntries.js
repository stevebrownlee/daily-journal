import Factory from "../journal/entryFactory"

export default Object.create(null, {
    render: {
        value: entries => {
            const entriesContainer = document.querySelector(".entryLog")

            entriesContainer.textContent = ""

            for (const entry of entries) {
                const entryComponent = Factory.makeHTMLComponent(entry)
                entriesContainer.innerHTML += entryComponent
            }
        }
    }
})