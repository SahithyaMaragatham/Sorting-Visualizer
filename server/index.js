const express = require("express");
const path = require("path"); // Import path module
const app = express();
const server = require("http").createServer(app);

// Use PORT from environment or default to 5000
const PORT = process.env.PORT || 5000;

// Serve static files from the 'client' directory
app.use(express.static(path.join(__dirname, "../client"))); // Adjusted path

// Route to serve the index.html file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/index.html")); // Adjusted path
});

// Start the server
server.listen(PORT, (err) => {
  if (err) {
    console.error("Error starting server:", err);
  } else {
    console.log(`Server is running on http://localhost:${PORT}`);
  }
});
