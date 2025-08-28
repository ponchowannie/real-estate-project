const apiBase = '/api/v1/notes';

const notesList = document.getElementById('notes-list');
const form = document.getElementById('create-form');
const contentInput = document.getElementById('content');
const statusEl = document.getElementById('status');

function setStatus(message, isError = false) {
    statusEl.textContent = message;
    statusEl.style.color = isError ? 'crimson' : 'green';
}

async function fetchNotes() {
    try {
        const res = await fetch(apiBase);
        const json = await res.json();
        if (!json.success) throw new Error(json.message || 'Failed to load');
        renderNotes(json.data || []);
    } catch (err) {
        setStatus(err.message, true);
    }
}

function renderNotes(notes) {
    notesList.innerHTML = '';
    if (!Array.isArray(notes) || notes.length === 0) {
        notesList.innerHTML = '<li>No notes yet</li>';
        return;
    }
    for (const note of notes) {
        const li = document.createElement('li');
        li.dataset.id = note.id;

        const text = document.createElement('span');
        text.textContent = `${note.id}: ${note.content}`;
        text.style.marginRight = '8px';

        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.onclick = () => editNote(note);

        const delBtn = document.createElement('button');
        delBtn.textContent = 'Delete';
        delBtn.style.marginLeft = '6px';
        delBtn.onclick = () => deleteNote(note.id);

        li.appendChild(text);
        li.appendChild(editBtn);
        li.appendChild(delBtn);
        notesList.appendChild(li);
    }
}

async function createNote(content) {
    try {
        const res = await fetch(apiBase, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content })
        });
        const json = await res.json();
        if (!json.success) throw new Error(json.message || 'Create failed');
        setStatus('Created');
        await fetchNotes();
    } catch (err) {
        setStatus(err.message, true);
    }
}

async function deleteNote(id) {
    try {
        const res = await fetch(`${apiBase}/${id}`, { method: 'DELETE' });
        const json = await res.json();
        if (!json.success) throw new Error(json.message || 'Delete failed');
        setStatus('Deleted');
        await fetchNotes();
    } catch (err) {
        setStatus(err.message, true);
    }
}

function editNote(note) {
    const updated = prompt('Edit content:', note.content);
    if (updated == null) return;
    updateNote(note.id, updated);
}

async function updateNote(id, content) {
    try {
        const res = await fetch(`${apiBase}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ content })
        });
        const json = await res.json();
        if (!json.success) throw new Error(json.message || 'Update failed');
        setStatus('Updated');
        await fetchNotes();
    } catch (err) {
        setStatus(err.message, true);
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const content = contentInput.value.trim();
    if (!content) return;
    createNote(content);
    contentInput.value = '';
});

// initial load
fetchNotes();
