const router = require('express').Router();
const tasksController = require('../controllers/tasksController');

/* [ROUTE] - '/tasks' */
router
    .route('/')
    .get(tasksController.allTasks);

module.exports = router;