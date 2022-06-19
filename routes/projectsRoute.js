const router = require('express').Router();
const projectsController = require('../controllers/projectsController');

/* [ROUTE] - '/projects/:projectID/tasks' */
router
    .route('/tasks')
    .get(projectsController.projectTasks);

module.exports = router;