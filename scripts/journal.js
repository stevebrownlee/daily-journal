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

/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
const renderJournalEntries = (entries) => {
    const entriesContainer = document.querySelector(".entryLog")

    for (entry of entries) {
        const entryComponent = makeJournalEntryComponent(entry)
        entriesContainer.innerHTML += entryComponent
    }
}

/*
    Fetch the journal entries
*/
fetch("http://localhost:3000/entries")
    .then(response => response.json())
    .then(renderJournalEntries)

