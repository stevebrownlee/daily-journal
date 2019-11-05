const EntryFactory = Object.create(null, {
    createEntryCard: {
        value: ({id, concept, entry, date}) => {
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

                <button class="button--edit" id="editButton--${id}">Edit</button>
            </article>
            `
        }
    }
})


export default EntryFactory