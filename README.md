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

## Resources

This section offers links to documentation, tutorials, and other resources that helped me to understand the technologies and methods used in this project:

- [Express Documentation](https://expressjs.com/en/starter/installing.html) - Learn about the framework used to build the server.
- [Node.js Documentation](https://nodejs.org/en/docs/) - Comprehensive resources on Node.js.
- [Understanding UUIDs](https://www.uuidgenerator.net/) - Information on what UUIDs are and how they are used in software development.

## Acknowledgments

- **[Node.js](https://nodejs.org/)** - Thanks to Node.js for the runtime environment.
- **[Express.js](https://expressjs.com/)** - Special thanks to the creators and maintainers of Express.
- **[UUID npm package](https://www.npmjs.com/package/uuid)** - Thanks to the maintainers of this package for providing easy generation of     
    UUIDs. 

## Further Reading

To deepen your understanding and help you with your projects, here are some additional resources:

- [Learn JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - MDN Web Docs on JavaScript.
- [REST API Design](https://restfulapi.net/) - Best practices in API design.
- [Understanding Middleware](https://expressjs.com/en/guide/using-middleware.html) - Guide to using Middleware in Express applications.

## Contact
 - Fgsdeve@gmail.com

- Project Link: https://github.com/fgsdeve/Note-Taker.git
