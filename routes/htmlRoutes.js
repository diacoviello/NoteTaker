const path = require('path');
const router = require('express').Router();

// bring in /notes route with the notes.html file
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

//create a permanent route to respond with the index.html file when ANY other route is hit
//****this must be the last route on the page***
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})
//****this must be the last route on the page***

module.exports = router;