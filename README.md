# Note-Taker Application

## Description
Note-Taker is an efficient web application designed to help users easily manage their notes. It allows users to create, save, view, and delete notes from a simple, clean interface, making it ideal for personal and professional use.

## Technologies Used
- **Node.js**: Server-side JavaScript runtime environment.
- **Express.js**: Web application framework for Node.js, used to build our server API.
- **UUID**: Utilized for generating unique identifiers for each note.
- **File System (fs)**: Node.js module used to handle read/write operations on the server side.
- **HTML/CSS**: Front-end technologies used for building the user interface.
- **Bootstrap**: CSS framework for developing responsive and mobile-first websites.

## Features
- Create and save new notes.
- View existing notes.
- Delete notes.

## Installation
- Clone the repository and install dependencies to get started:
- ``bash
- git clone git@github.com:fgsdeve/Note-Taker.git
- cd note-taker
- ``bash
- npm install
- npm start

## How It Works
- Server Setup: The server is set up with Express.js and listens on a predefined port. It serves static files and API routes.
- API Routes:
- GET /api/notes: Fetches all notes.
- POST /api/notes: Creates a new note with a unique ID.
- DELETE /api/notes/:id: Deletes a note based on its unique identifier.
- Front-end: Uses HTML and Bootstrap for the layout and styling with JavaScript to interact with the back-end via AJAX.

## Contributing
Contributions are welcome! If you have suggestions to improve the application, please fork the repository and submit a pull request.

License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contact
 - Fgsdeve@gmail.com

- Project Link: https://github.com/fgsdeve/Note-Taker.git
