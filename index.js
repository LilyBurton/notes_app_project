const NotesModel = require("./notesModel");
const NotesView = require("./notesView");

const model = new NotesModel();
model.addNote('This is an example');

const view = new NotesView(model);
view.displayNotes();