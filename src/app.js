import express from 'express'; // Importing the Express framework

const app = express(); // Creating an instance of an Express application

// Endpoint to handle GET requests to the root URL
app.get('/', (req, res) => {
    res.status(200).send('Hello from Acquisitions!');
})

export default app; // Exporting the Express application instance