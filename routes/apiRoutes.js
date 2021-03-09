//import items needed
const router = require("express").Router();
const store = require("../db/store");

//make a GET request with all the notes from the database

router.get("/notes", (req, res) => {
  store
    .getNotes()
    .then((notes) => {
      console.log(notes);
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});

router.get("/notes/:id", (req, res) => {
  store
    .getNotes()
    .then((notes) => {
      const activeNote = {};
      for (var i = 0; i < notes.length; i++) {
        if (notes[i].id === req.params.id) {
          activeNote = notes[i];
        }
      }
      console.log(activeNote);
      return res.json(activeNote);
    })
    .catch((err) => res.status(500).json(err));
});

//create a post request
router.post("/notes", (req, res) => {
  store.writeNotes(req.body);
  return res.json(req.body);
});

//create a delete request
router.delete("/notes/:id", (req, res) => {
  store
    .deleteNote(req.params.id)
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
