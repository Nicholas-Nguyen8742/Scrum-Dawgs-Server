const router = require('express').Router();
const githubController = require('../controllers/githubController');

// [ROUTE] - '/github'
// [GET] - Create login endpoint for Github auth process needs authenticate call back.
router
    .route('/')
    .get(githubController.inital);

// [ROUTE] - '/github/callback'
// [GET] - Github Auth Callback that Github redirects to after user responds 
router 
    .route('/callback')
    .get(githubController.callback);

// [ROUTE] - '/github/profile'
// [GET] - User profile endpoint requires authentication
router 
    .route('/profile')
    .get(githubController.profile);

// [ROUTE] - '/github/logout'
// [GET] - Logout Endpoint for Github User
router 
    .route('/logout')
    .get(githubController.logout);

// [ROUTE] - '/github/success-callback'
// [GET] - Success Callback for Github User logout
router 
    .route('/success-callback')
    .get(githubController.successLogout)

module.exports = router;