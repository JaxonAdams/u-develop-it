const mysql = require('mysql2');

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

module.exports = db;