/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.

    Using the DataManager object defined in data.js, you get
    all of the journal entries, then pass them to the
    `renderJournalEntries` function defined in entriedDom.js
*/

DataManager.getJournalEntries().then(renderJournalEntries)

