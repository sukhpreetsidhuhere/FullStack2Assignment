import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

import { notes } from './persistence.js';
import notesRouter from './routes/notes.js';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); // Ensure this line is included

app.get('/', (req, res) => {
  res.render('index', { title: 'Notes', notes: notes() });
});

app.use('/notes', notesRouter);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

export default app;
