import { EntryFilters } from "./EntryFIlters.js"
import { EntryForm } from "./EntryForm.js"
import { EntryList } from "./EntryList.js"

export const DailyJournal = () => {
    return `
        <section class="dailyJournalForm">
            ${ EntryForm() }
            ${ EntryFilters() }
        </section>
        <section class="entryList">
            ${ EntryList() }
        </section>
    `
}