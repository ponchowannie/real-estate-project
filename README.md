#### Notes API Features

- **Create** notes with content
- **Read** all notes or individual notes by ID
- **Update** existing notes
- **Delete** notes
- **Web Interface** for testing all operations

### API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/v1/notes` | Get all notes |
| `POST` | `/api/v1/notes` | Create a new note |
| `GET` | `/api/v1/notes/:id` | Get a specific note |
| `PUT` | `/api/v1/notes/:id` | Update a note |
| `DELETE` | `/api/v1/notes/:id` | Delete a note |

### Quick Start (Notes API)

#### Using Docker (Recommended)
```bash
# Start the server
docker compose up --build -d

# Test the API
curl http://localhost:4001/api/v1/notes

# Open web interface
# Visit: http://localhost:4001/public/notes-test.html
```