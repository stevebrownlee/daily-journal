export const createEntryForm = (mode) => {
    let formHTML = `
        <form class="journalForm">
            <fieldset class="fieldset">
                <label for="journalDate">Date of entry</label>
                <input type="date" name="journalDate" id="journalDate">
            </fieldset>
            <fieldset class="fieldset">
                <label for="concepts">Concepts covered</label>
                <input type="text" name="concepts" id="concepts">
            </fieldset>
            <fieldset class="fieldset">
                <label for="journalEntry">Journal Entry</label>
                <textarea type="date" name="journalEntry" id="journalEntry"></textarea>
            </fieldset>
            <fieldset class="fieldset">
                <label for="journalDate">Mood for the day</label>
                <select name="mood" id="mood">
                    <option value="sad">Sad</option>
                    <option value="ok">Ok</option>
                    <option value="happy">Happy</option>
                </select>
            </fieldset>
        </form>
    `

    if (mode === "edit") {
        formHTML += "<button id=\"pleaseUpdateForMe\">Update</button>"
    }

    return formHTML
}