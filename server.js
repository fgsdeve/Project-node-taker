const express = require('express');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');/*  Ensure UUID is installed: npm install uuid!!!
i spend a hour trying to find out what was the issue :DD */
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// API Routes for Notes
app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return res.status(500).send("Error reading the notes file.");
        }
        res.json(JSON.parse(data));
    });
});

// POST a new note
app.post('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return res.status(500).send("Error reading the notes file.");
        }
        const notes = JSON.parse(data);
        const newNote = { ...req.body, id: uuidv4() }; // Add a unique ID
        notes.push(newNote);
        fs.writeFile('./db/db.json', JSON.stringify(notes, null, 2), (err) => {
            if (err) {
                console.error("Error writing file:", err);
                return res.status(500).send("Error saving the note.");
            }
            res.json(newNote);
        });
    });
});

// DELETE a note by ID
app.delete('/api/notes/:id', (req, res) => {
    const noteId = req.params.id;
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return res.status(500).send("Error reading the notes file.");
        }
        const notes = JSON.parse(data).filter(note => note.id !== noteId);
        fs.writeFile('./db/db.json', JSON.stringify(notes), (err) => {
            if (err) {
                console.error("Error writing file:", err);
                return res.status(500).send("Error deleting the note.");
            }
            res.status(204).send(); // 204 No Content
        });
    });
});

// HTML Routes
// Serve notes.html for requests to /notes
app.get('/notes', (req, res) => {  
    res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});

// Catch-all route to serve index.html
app.get('*', (req, res) => { 
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
