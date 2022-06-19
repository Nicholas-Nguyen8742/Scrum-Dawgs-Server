const knex = require('knex')(require('../knexfile'));

/* [ROUTE] - '/projects' */
// [GET] - Gets all projects from database
exports.allProjects = (req, res) => {

};


/* [ROUTE] - '/projects/:projectID/users' */
// [GET] - Gets all users of a project
exports.projectUsers = (req, res) => {

};


/* [ROUTE] - '/projects/:projectID/tasks' */
// [GET] - Gets all tasks related to a project
exports.projectTasks = (req, res) => {
    knex('tasks')
    .where({ projectID: req.params.projectID })
    .then((data) => {
      if (!data.length) {
        return res.status(404).send(`Project tasks with id: ${req.params.projectID} is not found`);
      }

      res.status(200).json(data[0]);
    })
    .catch((err) =>
      res.status(400).send(`Error retrieving project tasks ${req.params.projectID} ${err}`)
    );
};



