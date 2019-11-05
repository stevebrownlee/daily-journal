import { getJournalEntries } from "./data/dataManager"
import EntrySave from "./journal/save"
import EntryFilter from "./journal/filter"
import { renderAllEntries } from "./journal/renderEntries"
import { getAllEditButtons } from "./journal/eventManager"

EntrySave.init()
EntryFilter.init()

getJournalEntries()
    .then(renderAllEntries)
    .then(getAllEditButtons)