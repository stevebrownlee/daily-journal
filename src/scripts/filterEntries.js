/*
    Basic implementation:

        document.getElementsByName("moodFilter").forEach(node => {
            node.addEventListener("event", e => {
                const mood = e.target.value

                DataManager.getJournalEntries().then(entries => {
                    const filteredEntries = entries.filter(entry => entry.mood === mood)
                    renderJournalEntries(filteredEntries)
                })
            })
        })
*/

document.getElementsByName("moodFilter").forEach(node =>
    node.addEventListener("click", event =>
        DataManager.getJournalEntries()
            .then(entries => entries.filter(entry => entry.mood === event.target.value))
            .then(renderJournalEntries)
    )
)
