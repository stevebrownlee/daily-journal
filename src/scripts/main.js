import DataManager from "./data/dataManager"
import EntrySave from "./journal/save"
import EntryDOM from "./journal/renderEntries"
import EntryFilter from "./journal/filter"

EntrySave.init()
EntryFilter.init()

DataManager.getJournalEntries().then(EntryDOM.renderAll)