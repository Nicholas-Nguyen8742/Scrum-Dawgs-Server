require("dotenv").config();
const passport = require("passport");

/* [ROUTE] - '/github' */ 
// [GET] - Create a login endpoint which kickstarts the auth process and takes user to a consent page
exports.github = () => {
  passport.authenticate('github', { scope: [ 'user:email' ] })
};

/* [ROUTE] - '/github/callback' */
// [GET] - Github Auth Callback that Github redirects to after user responds
exports.callback = (req, res) => {
    // Successful authentication, redirect to client-side application
    res.redirect(process.env.CLIENT_URL);
};

/* [ROUTE] - '/github/profile' */
// [GET] - User profile endpoint requires authentication
exports.profile = (req, res) => {
  // Passport stores authenticated user information on `req.user` object.
  // Comes from done function of `deserializeUser`
  console.log("User Object:", req.user); // The user property is something that passport middleware adds

  if (req.user === undefined)
    // If `req.user` isn't found send back a 401 Unauthorized response
    return res.status(401).json({ message: "Unauthorized" });

  res.status(200).json(req.user); // If user is currently authenticated, send back user info
};

/* [ROUTE] - '/github/logout' */
// [GET] - Logout Endpoint for Github User
exports.logout = (req, res) => {
  req.logout(); // Passport adds the logout method to request, it will end user session

  res.redirect(process.env.CLIENT_URL); // Redirect the user back to client-side application
};

/* [ROUTE] - '/github/success-callback' */
// [GET] - Success Callback for Github User logout
exports.successLogout = (req, res) => {
  if (req.user) {
    res.status(200).json(req.user);
  } else {
    res.status(401).json({ message: "User is not logged in" });
  }
};
