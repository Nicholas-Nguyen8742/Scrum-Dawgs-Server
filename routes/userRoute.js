const router = require('express').Router();
const userController = require('../controllers/userController');

// [ROUTE] - '/users/:userID'
router
    .route('/:userID')
    .get(userController.singleUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser);

// [ROUTE] - '/users/:userID/projects'
router 
    .route('/:userID/projects')
    .get(userController.allProjects)
    .post(userController.newProject);

// [ROUTE] - '/users/:userID/projects/:projectID'
router
    .route('/:userID/projects/:projectID')
    .get(userController.singleProject)
    .put(userController.updateProject)
    .delete(userController.delete);

// [ROUTE] - '/users/:userID/tasks'
router 
    .route('/:userID/tasks')
    .get(userController.allTasks)
    .post(userController.newTask);

// [ROUTE] - '/users/:userID/tasks/:taskID'
router
    .route('/:userID/tasks/:taskID')
    .get(userController.singleTask)
    .put(userController.updateTask)
    .delete(userController.delete);

    module.exports = router;
