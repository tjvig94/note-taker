const router = require("express").Router();
const fs = require("fs");
const notes = require("../db/db.json");
const uuid = require("uuid");

router.get("/api/notes", (req, res) => {
    res.send(notes);
})

router.post("/api/notes", (req, res) => {

    let noteId = uuid.v4();
    let newNote = {
        id: noteId,
        title: req.body.title,
        text: req.body.text
    };

    // Write data to db.json
    fs.readFile("./db/db.json", (err, data) => {
        if (err) throw err;
        const parsedNotes = JSON.parse(data);
        parsedNotes.push(newNote);
        fs.writeFile("./db/db.json", JSON.stringify(parsedNotes), err => {
            if (err) throw err;
            res.send(notes);
        });       
    });
});

router.delete("/api/notes/:id", (req, res) => {
    let noteId = req.params.id;
    fs.readFile("./db/db.json", (err, data) => {
        if (err) throw err;

        // Parse note data, and separate the note with the matching id from the rest
        const parsedNotes = JSON.parse(data);
        const filteredNotes = parsedNotes.filter((note) => note.id != noteId);

        // Write the notes without the matching id to db.json
        fs.writeFile("./db/db.json", JSON.stringify(parsedNotes), err => {
            if (err) throw err;
            res.send(notes);
        });
    });
});



module.exports = router;