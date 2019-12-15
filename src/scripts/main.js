import { getJournalEntries } from "./data/dataManager"
import EntrySave from "./journal/save"
import EntryFilter from "./journal/filter"
import { renderEntryForm } from "./journal/formManager"
import { renderAllEntries } from "./journal/renderEntries"
import { getAllEditButtons } from "./journal/eventManager"

EntrySave.init()
EntryFilter.init()

getJournalEntries()
    .then(renderAllEntries)
    .then(renderEntryForm)
    .then(getAllEditButtons)
