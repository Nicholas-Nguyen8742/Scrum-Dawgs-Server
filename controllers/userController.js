const knex = require('knex')(require('../knexfile'));

/* [ROUTE] - '/users' */
// [GET] - Gets all users
exports.index = (req, res) => {

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
