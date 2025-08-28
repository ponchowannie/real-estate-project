// create an array and ID to store notes sharing across the server
const notes = [];
let nextId = 1;

// Create a new note
const createNote = async (req, res) => {
    try {
        const { content } = req.body;
        
        if (!content) {
            return res.status(400).json({
                success: false,
                message: 'Content is required'
            });
        }

        const newNote = {
            id: nextId++,
            content
        };

        notes.push(newNote);

        res.status(201).json({
            success: true,
            message: 'Note created successfully',
            data: newNote
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};

// Get all notes
const getAllNotes = async (req, res) => {
    try {
        res.status(200).json({
            success: true,
            count: notes.length,
            data: notes
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};

// Get single note by ID
const getNoteById = async (req, res) => {
    try {
        const noteId = parseInt(req.params.id);
        const note = notes.find(n => n.id === noteId);

        if (!note) {
            return res.status(404).json({
                success: false,
                message: 'Note not found'
            });
        }

        res.status(200).json({
            success: true,
            data: note
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};

// Update note
const updateNote = async (req, res) => {
    try {
        const noteId = parseInt(req.params.id);
        const { content } = req.body;

        const noteIndex = notes.findIndex(n => n.id === noteId);

        if (noteIndex === -1) {
            return res.status(404).json({
                success: false,
                message: 'Note not found'
            });
        }

        if (!content) {
            return res.status(400).json({
                success: false,
                message: 'Content must be provided'
            });
        }

        // Update only provided fields
        if (content) notes[noteIndex].content = content;

        res.status(200).json({
            success: true,
            message: 'Note updated successfully',
            data: notes[noteIndex]
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};

// Delete note
const deleteNote = async (req, res) => {
    try {
        const noteId = parseInt(req.params.id);
        const noteIndex = notes.findIndex(n => n.id === noteId);

        if (noteIndex === -1) {
            return res.status(404).json({
                success: false,
                message: 'Note not found'
            });
        }

        const deletedNote = notes.splice(noteIndex, 1)[0];

        res.status(200).json({
            success: true,
            message: 'Note deleted successfully',
            data: deletedNote
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal server error',
            error: error.message
        });
    }
};

// Export functions for use in routes
module.exports = {
    createNote,
    getAllNotes,
    getNoteById,
    updateNote,
    deleteNote
};
