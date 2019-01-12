document.querySelector(".filter__searchTerm").addEventListener("keypress", e => {
    if (e.charCode === 13) {
        const searchTerm = e.target.value

        DataManager.getJournalEntries()
        .then(journalEntries => {
            const matchingEntries = []

            journalEntries.forEach(entry => {
                let foundMatch = false
                for (const prop of Object.values(entry)) {
                    if (!foundMatch && typeof prop === "string" && prop.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                        foundMatch = true
                        matchingEntries.push(entry)
                    }
                }
            })

            e.target.value = ""
            renderJournalEntries(matchingEntries)
        })
    }
})
