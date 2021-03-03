const router = require("express").Router();
const fs = require("fs");
const notes = require("../data/db.json");
// const uuid = require("uuid");

router.get("/api/notes", (req, res) => {
    res.send(notes);
})

router.post("/api/notes", (req, res) => {

    // let noteId = uuid();
    let newNote = {
        // id: noteId,
        title: req.body.title,
        text: req.body.text
    };

    // Write data to db.json
    fs.readFile("./data/db.json", (err, data) => {
        if (err) throw err;
        const parsedNotes = JSON.parse(data);
        parsedNotes.push(newNote);
        fs.writeFile("./data/db.json", JSON.stringify(parsedNotes), err => {
            if (err) throw err;
            res.send(notes);
        });
       
    });
});



module.exports = router;