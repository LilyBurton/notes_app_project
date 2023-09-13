class NotesView {
    constructor(model) {
        this.model = model;
        this.mainContainerEl = document.querySelector('#main-container');

        document.querySelector('#add-note-button').addEventListener('click', () => {
            const newNote = document.querySelector('#add-note-input').value;
            this.addNewNote(newNote);
        });
    }

    addNewNote(newNote) {
        this.model.addNote(newNote);
        this.displayNotes();
    }


    displayNotes() {
        const notesArr = this.model.getNotes();
        notesArr.forEach(note => {
            const noteEl = document.createElement('div');
            noteEl.textContent = note;
            noteEl.className = 'note';
            this.mainContainerEl.append(noteEl);
        })
    }

}

module.exports = NotesView;