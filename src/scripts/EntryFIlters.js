export const EntryFilters = () => {
    return `
        <article class="filter">
            <section class="filter__section filter__section--mood">
                <fieldset>
                    <legend>Filter Journal Entries by Mood</legend>
                    <input type="radio" name="moodFilter" id="moodFilter--sad" value="sad">
                    <label for="moodFilter--sad">Sad</label>
                    <input type="radio" name="moodFilter" id="moodFilter--happy" value="happy">
                    <label for="moodFilter--happy">Happy</label>
                    <input type="radio" name="moodFilter" id="moodFilter--ok" value="ok">
                    <label for="moodFilter--ok">Ok</label>
                </fieldset>
            </section>
            <section class="filter__section filter__section--search">
                <fieldset>
                    <legend>Search journal entries</legend>
                    <input class="filter__searchTerm" placeholder="Enter search term" type="text" name="" id="">
                </fieldset>
            </section>
        </article>
    `
}