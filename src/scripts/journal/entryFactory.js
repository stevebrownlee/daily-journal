export default Object.create(null, {
    makeHTMLComponent: {
        value: journalEntry => {
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
    }
})
