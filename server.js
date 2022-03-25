const express = require('express');
const mysql = require('mysql2');

// Define PORT
const PORT = process.env.PORT || 3001;
// Set up app
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to MySQL database
const db = mysql.createConnection(
    {
        host: "localhost",
        // MySQL username
        user: "root",
        // MySQL password
        password: 'PLAjuly25!',
        database: 'election'
    }, 
    console.log('Connected to the database.')
);

// return data in candidates table
db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// Start server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}.`);
});