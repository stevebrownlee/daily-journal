const DataManager = Object.create(null, {
    getJournalEntries: {
        value: function () {
            // Fetch the journal entries
            return fetch("http://localhost:3000/entries")
                .then(response => response.json())
        }
    }
})