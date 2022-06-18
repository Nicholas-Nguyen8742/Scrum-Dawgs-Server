require("dotenv").config();
const express = require("express");
const expressSession = require("express-session"); // Middleware for creating a session id on server and a session cookie on client
const cors = require("cors");
const helmet = require("helmet"); // Add http headers, small layer of security
const passport = require("passport"); // Passport Library Import
const GitHubStrategy = require("passport-github2").Strategy; // Github Strategy
const knex = require("knex")(require("./knexfile.js").development); // Knex Instance
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json()); // Enable req.body middleware
app.use(helmet()); // Initialize HTTP Headers Middleware
app.use(
  cors({
    origin: true,
    credentials: true,
  })
); // Enable Cors (Additional configuration options required for cookies)


// Import routes from ${./routes} directory
const authRoutes = require("./routes/authRoute");
const githubRoutes = require("./routes/githubRoute");

// Root url for respective routes
app.use("/auth", authRoutes);
app.use("/github", githubRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
