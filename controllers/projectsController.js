const knex = require('knex')(require('../knexfile'));

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



