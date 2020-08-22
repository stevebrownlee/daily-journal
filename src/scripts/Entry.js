import { deleteJournalEntry } from "./EntryDataProvider.js";

const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", e => {
    if (e.target.id.startsWith("deleteEntry--")) {
        const [prompt, id] = e.target.id.split("--")

        deleteJournalEntry(parseInt(id))
    }
})

export const Entry = (journalEntry) => {
    return `
        <article class="journalEntry">
            <header>
                <h2>${journalEntry.concept}</h2>
            </header>
            <section>
                ${journalEntry.entry}
            </section>
            <date>
                <time>${journalEntry.date}</time>
            </date>
            <footer>
                <button id="deleteEntry--${journalEntry.id}">Delete</button>
            </footer>
        </article>
    `
}