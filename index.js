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
app.use(
  expressSession({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
); // Include express-session middleware (with additional config options required for Passport session)

/*Passport Configuration*/
app.use(passport.initialize()); // Initialize Passport Middleware
app.use(passport.session()); // Passport.session middleware alters the `req` object with the `user` value by converting session id from the client cookie into a deserialized user object.
passport.use(
    new GitHubStrategy(
      {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: process.env.GITHUB_CALLBACK_URL
      },
      (_accessToken, _refreshToken, profile, done) => {
        // For our implementation we don't need access or refresh tokens.
        // Profile parameter will be the profile object we get back from GitHub
        console.log('GitHub profile:', profile);
  
        // First let's check if we already have this user in our DB
        knex('users')
          .select('id')
          .where({ github_id: profile.id })
          .then(user => {
            if (user.length) {
              // If user is found, pass the user object to serialize function
              done(null, user[0]);
            } else {
              // If user isn't found, we create a record
              knex('users')
                .insert({
                  github_id: profile.id,
                  avatar_url: profile._json.avatar_url,
                  name: profile.username
                })
                .then(userId => {
                  // Pass the user object to serialize function
                  done(null, { id: userId[0] });
                })
                .catch(err => {
                  console.log('Error creating a user', err);
                });
            }
          })
          .catch(err => {
            console.log('Error fetching a user', err);
          });
      }
    )
  );

// Import routes from ${./routes} directory
const authRoutes = require("./routes/authRoute");
const githubRoutes = require("./routes/githubRoute");

// Root url for respective routes
app.use("/auth", authRoutes);
app.use("/github", githubRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
