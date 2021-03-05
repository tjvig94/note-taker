const router = require("express").Router();
const fs = require("fs");
const notes = require("../db/db.json");
const uuid = require("uuid");

router.get("/api/notes", (req, res) => {
    fs.readFile("./db/db.json", (err, data) => {
        if (err) throw err;
    });
    res.send(notes);
});

router.post("/api/notes", (req, res) => {
    // Create note object
    let noteId = uuid.v4();
    let newNote = {
        id: noteId,
        title: req.body.title,
        text: req.body.text
    };
    fs.readFile("./db/db.json", (err, data) => {
        if (err) throw err;
        notes.push(newNote);
        fs.writeFile("./db/db.json", JSON.stringify(notes), err => {
            if (err) throw err;
            res.send(notes);
        });       
    });
});

router.delete("/api/notes/:id", (req, res) => {
    let noteId = req.params.id;
    fs.readFile("./db/db.json", (err, data) => {
        if (err) throw err;
        for (let i = 0; i < notes.length; i++) {
            (notes[i].id == noteId) ? notes.splice(i, 1) : "";                  
        };
        fs.writeFile("./db/db.json", JSON.stringify(notes), err => {
            if (err) throw err; 
            res.send(notes);
        });       
    });   
});

module.exports = router;