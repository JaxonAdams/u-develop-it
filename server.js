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
// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     console.log(rows);
// });

// GET a single candidate
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
//     if (err) {
//         console.log(err);
//     }

//     console.log(row);
// });

// DELETE a candidate
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//     if (err) {
//         console.log(err);
//     }

//     console.log(result);
// });

// CREATE a candidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected)
            VALUES(?, ?, ?, ?)`;
const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql, params, (err, result) => {
    if (err) {
        console.log(err);
    }

    console.log(result);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// Start server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}.`);
});