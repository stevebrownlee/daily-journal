import { EntryFilters } from "./EntryFIlters.js"
import { EntryForm } from "./EntryForm.js"
import { EntryList } from "./EntryList.js"

const contentTarget = document.querySelector(".container")

export const DailyJournal = () => {
    contentTarget.innerHTML = `
        <section class="dailyJournalForm">
            ${ EntryForm() }
            ${ EntryFilters() }
        </section>
        <section class="entryList">
            ${ EntryList() }
        </section>
    `
}