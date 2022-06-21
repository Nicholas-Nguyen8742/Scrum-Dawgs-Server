const router = require('express').Router();
const projectsController = require('../controllers/projectsController');

/* [ROUTE] - '/projects' */
router
    .route('/')
    .get(projectsController.allProjects);

/* [ROUTE] - '/projects/:projectID/users' */
router 
    .route('/:projectID/users')
    .get(projectsController.projectUsers);

/* [ROUTE] - '/projects/:projectID/tasks' */
router
    .route('/:projectID/tasks')
    .get(projectsController.projectTasks);

module.exports = router;