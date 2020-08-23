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
        <article class="entry">
            <header class="entry__header">
                <h2>${journalEntry.concept}</h2>
            </header>
            <section class="entry__text">
                ${journalEntry.entry}
                <div class="entry__mood">I felt ${ journalEntry.mood } about it</div>
            </section>
            <date>
                <time class="entry__datetime">${journalEntry.date}</time>
            </date>
            <footer>
                ${
                  journalEntry.tags.map(t => `#${t.subject}`).join(" ")
                }
            </footer>
            <button id="deleteEntry--${journalEntry.id}">Delete</button>
        </article>
    `
}