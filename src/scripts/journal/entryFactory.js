const EntryFactory = Object.create(null, {
    createEntryCard: {
        value: ({concept, entry, date}) => {
            return `
            <article class="journalEntry">
                <header>
                    <h2>${concept}</h2>
                </header>
                <section>
                    ${entry}
                </section>
                <footer>
                    <time>${date}</time>
                </footer>
            </article>
            `
        }
    }
})


export default EntryFactory