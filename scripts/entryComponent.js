/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/
const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry
    return `
    <article class="journalEntry">
        <header>
            <h2>${journalEntry.concept}</h2>
        </header>
        <section>
            ${journalEntry.entry}
        </section>
        <footer>
            <time>${journalEntry.date}</time>
        </footer>
    </article>
    `
}