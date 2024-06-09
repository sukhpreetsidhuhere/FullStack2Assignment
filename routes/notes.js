import express from 'express';
import { addNote, removeNote, editNote } from '../persistence.js';

const router = express.Router();

router.post('/', (req, res) => {
  const { noteText } = req.body;
  addNote(noteText);
  res.redirect('/');
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  removeNote(id);
  res.sendStatus(200);
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  editNote(id, text);
  res.sendStatus(200);
});

export default router;
