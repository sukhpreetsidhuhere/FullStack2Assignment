import { v4 as uuidv4 } from 'uuid';

let _notes = [
  { id: "2", text: "CPSC 2650" },
  { id: "1", text: "An awesome web dev Note" },
];

const notes = () => _notes;

const addNote = (text) => {
  const id = uuidv4();
  _notes.push({ id, text });
};

const removeNote = (id) => {
  _notes = _notes.filter(note => note.id !== id);
};

const editNote = (id, text) => {
  const note = _notes.find(note => note.id === id);
  if (note) {
    note.text = text;
  }
};

export { notes, addNote, removeNote, editNote };
