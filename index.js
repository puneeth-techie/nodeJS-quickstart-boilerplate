import app from "./startups/app.js";
import connectDB from "./startups/db.js";
import http from "http";

// init server
const server = http.createServer(app);

// Fetching port from .env or set to 5000
const port = process.env.PORT || 5000;

// init mongo DB
connectDB();

// Server listening
server.listen(port, () => {
  console.log(`Server started listening on ${port}...`);
});
