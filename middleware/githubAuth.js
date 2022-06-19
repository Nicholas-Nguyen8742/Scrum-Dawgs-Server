/*GitHub Passport Authenticate Middleware*/
const passport = require('passport');
require("dotenv").config();


// Passport Authenticate Middleware
const passportGithub = (req, res, next) => {
    passport.authenticate('github', {
        failureRedirect: `${process.env.CLIENT_URL}/auth-fail`
    })

    next();
};


module.exports = passportGithub;