const express = require('express');

// import functions for handling notes
// const { 
//     createNote, 
//     getAllNotes, 
//     getNoteById, 
//     updateNote, 
//     deleteNote 
// }


const router = express.Router();

// Create a new note
router.route('/notes').post(createNote);

// Get all notes
router.route('/notes').get(getAllNotes);

// Get, update, and delete a specific note by ID
router.route('/notes/:id')
    .get(getNoteById)
    .put(updateNote)
    .delete(deleteNote);

module.exports = router;