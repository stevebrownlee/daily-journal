const DataManager = Object.create(null, {
    getJournalEntries: {
        value: function () {
            return fetch("http://localhost:8088/entries")
                .then(response => response.json())
        }
    },
    saveJournalEntry: {
        value: async function (entry) {
            const response = await fetch("http://localhost:8088/entries", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(entry)
            });
            return response.json()
        }
    }
})

export default DataManager