const router = require('express').Router();
const userController = require('../controllers/userController');

// [ROUTE] - '/users'
router 
    .route('/')
    .get(userController.indexUsers);

// [ROUTE] - '/users/:userID'
router
    .route('/:userID')
    .get(userController.singleUser)
    .put(userController.updateUser)
    .delete(userController.deleteUser);

// [ROUTE] - '/users/:userID/projects'
router 
    .route('/:userID/projects')
    .get(userController.userProjects)
    .post(userController.newProject);

// [ROUTE] - '/users/:userID/projects/:projectID'
router
    .route('/:userID/projects/:projectID')
    .get(userController.singleProject)
    .put(userController.updateProject)
    .delete(userController.deleteProject);

// [ROUTE] - '/users/:userID/tasks'
router 
    .route('/:userID/tasks')
    .get(userController.userTasks)
    .post(userController.newTask);

// [ROUTE] - '/users/:userID/tasks/:taskID'
router
    .route('/:userID/tasks/:taskID')
    .get(userController.singleTask)
    .put(userController.updateTask)
    .delete(userController.deleteTask);

module.exports = router;
