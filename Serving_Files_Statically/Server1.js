const express = require('express');
const fs = require('fs');
const path = require('path');

const server = express();

// Use express.static middleware to serve static files from the 'public' directory
server.use(express.static('public'));

server.get("/", (req, res) => {
    // You don't need to read the file manually, express.static will handle it
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

server.listen(3100, () => {
    console.log('Server is listening on port 3100');
});
