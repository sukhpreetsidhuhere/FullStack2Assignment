import express from 'express';
import { notes, addNote, removeNote } from './persistence.js';

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'YANT (Yet another Note Taking app)', notes: notes() });
});

/* POST new note. */
router.post('/notes', (req, res, next) => {
  const { noteText } = req.body;
  if (noteText) {
    addNote(noteText);
  }
  res.redirect('/');
});

/* DELETE a note. */
router.post('/notes/delete', (req, res, next) => {
  const { id } = req.body;
  if (id) {
    removeNote(id);
  }
  res.redirect('/');
});

export default router;
