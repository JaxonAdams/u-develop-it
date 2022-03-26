const express = require('express');
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');
const inputCheck = require('./utils/inputCheck');

// Define PORT
const PORT = process.env.PORT || 3001;
// Set up app
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use api routes
app.use('/api', apiRoutes);

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// Start server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}.`);
});