# Real Estate Rental Platform (crypto payment system)

Rental Platform aims to revolutionize the rental property market by integrating cryptocurrency payments into a secure, scalable platform that simplifies transactions for property owners and tenants.

![alt text](public/real-estate.png)

### Support a multi-currency crypto payment system.

A secure crypto payment system that allows users to pay rent or make deposits using cryptocurrencies.

![alt text](public/marketplace.png)

## 🧪 Take-Home Test: Notes API

This project includes a **Notes API** implementation as part of a take-home test submission. The Notes API provides full CRUD operations for managing notes with a simple web interface for testing.

### Notes API Features

- ✅ **Create** notes with content
- ✅ **Read** all notes or individual notes by ID
- ✅ **Update** existing notes
- ✅ **Delete** notes
- ✅ **Web Interface** for testing all operations

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

#### Using Node.js directly
```bash
# Install dependencies
npm install

# Start the server
node server/server.js

# Test the API
curl http://localhost:4001/api/v1/notes
```

### Testing the Notes API

1. **Web Interface**: Open `http://localhost:4001/public/notes-test.html` in your browser
2. **Create Notes**: Type content and click "Create"
3. **Edit Notes**: Click "Edit" on any note to modify content
4. **Delete Notes**: Click "Delete" to remove notes
5. **Refresh**: Click "Refresh" to reload the notes list

### Example API Usage

```bash
# Create a note
curl -X POST http://localhost:4001/api/v1/notes \
  -H "Content-Type: application/json" \
  -d '{"content": "My first note"}'

# Get all notes
curl http://localhost:4001/api/v1/notes

# Update a note
curl -X PUT http://localhost:4001/api/v1/notes/1 \
  -H "Content-Type: application/json" \
  -d '{"content": "Updated note content"}'

# Delete a note
curl -X DELETE http://localhost:4001/api/v1/notes/1
```

### Technical Details

- **Backend**: Node.js with Express
- **Storage**: In-memory (resets on server restart)
- **Containerization**: Docker with docker-compose
- **Testing**: Web interface with vanilla JavaScript
- **Architecture**: RESTful API with proper error handling

---

### Original Project Setup

### Install dependencies

```
   npm install
```

### Run on localhost

```
   npm start
```
