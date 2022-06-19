const passport = require('passport');
require('dotenv').config();

// [ROUTE] - '/github'
// [GET] - Create login endpoint for Github auth process needs authenticate call back.
exports.inital = (req, res) => {

}

// [ROUTE] - '/github/callback'
// [GET] - Github Auth Callback that Github redirects to after user responds 
exports.callback = (req, res) => {

}

// [ROUTE] - '/github/profile'
// [GET] - User profile endpoint requires authentication
exports.profile = (req, res) => {

}

// [ROUTE] - '/github/logout'
// [GET] - Logout Endpoint for Github User
exports.logout = (req, res) => {

}

// [ROUTE] - '/github/success-callback'
// [GET] - Success Callback for Github User logout
exports.successLogout = (req, res) => {

}