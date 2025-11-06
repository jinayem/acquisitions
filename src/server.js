import app from './app.js'; // Importing the Express application

const PORT = process.env.PORT || 3000; // Defining the port number

// Starting the server and Listening on the specified port
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`); // Logging a message to indicate the server is running
});