const knex = require('knex')(require('../knexfile'));

/* [ROUTE] - '/users' */
// [GET] - Gets all users
exports.indexUsers = (req, res) => {
    knex('users')
    .select('id', 'name', 'avatar_url', 'email')
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).send(`Error retrieving Users: ${err}`));
};


// [ROUTE] - '/users/:userID'
// [GET] - Get single user data
exports.singleUser = (req, res) => {

};

// [PUT] - Updates single user data
exports.updateUser = (req, res) => {

};

// [DELETE] - Deletes single user data
exports.deleteUser = (req, res) => {

};


/* [ROUTE] - '/users/:userID/projects' */
// [GET] - Get all projects that belong to one user
exports.userProjects = (req, res) => {

};

// [POST] - Posts new project by a user 
exports.newProject = (req, res) => {

};


/* [ROUTE] - '/users/:userID/projects/:projectID' */
// [GET] - Gets single project of a user
exports.singleProject = (req, res) => {

};

// [PUT] - Updates a single project of a user
exports.updateProject = (req, res) => {

};

// [DELETE] - Deletes single project of a user
exports.deleteProject = (req, res) => {

};


/* [ROUTE] - '/users/:userID/tasks' */
// [GET] - Get all tasks of user
exports.userTasks = (req, res) => {

};

// [POST] - Add new task by user
exports.newTask = (req, res) => {

};


/* [ROUTE] - '/users/:userID/tasks/:taskID' */
// [GET] - Gets single task of user
exports.singleTask = (req, res) => {

};

// [PUT] - Updates single task of user
exports.updateTask = (req, res) => {

};

// [DELETE] - Deletes single task of user 
exports.deleteTask = (req, res) => {

};