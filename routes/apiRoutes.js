const router = require("express").Router();
const fs = require("fs");

// Read notes in db.json
router.get("/api/notes", (req, res) => {
    res.json(notes);
});

// Write notes to db.json
router.post("/api/notes", (req, res) => {
    notes.push(req.body);
});

// Clear notes from db.json
router.post("/api/clear", (req, res) => {

})

module.exports = router;