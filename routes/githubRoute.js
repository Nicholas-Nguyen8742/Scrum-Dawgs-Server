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

module.exports = router;