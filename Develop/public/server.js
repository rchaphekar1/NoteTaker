const http = require('http');
const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const notes = [
    {
        title: '',
        text: '',
    }
];

// Routes to HTML pages
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));

// Routes for API's
app.get('/api/notes', (req, res) => res.json(notes));
app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    notes.push(newNote);
    res.json(newNote);
});

// Sets up server
app.listen(PORT, () => {
    console.log(`Sever listening on: http://localhost:${PORT}`);
});