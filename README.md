# Scrum Dawgs Server

### Run Locally
Create new schema in MySQL Workbench named scrum_dawgs. Ensure configuration for Local Database Instance is configured correctly in knexfile.js for host, user, password. Ensure that your MySQL server is running, then run the following scripts: 
```
  npm run migrate
  npm run start
```

### NPM Scripts 
```
  "scripts": {
    "migrate": "knex migrate:latest",
    "migrate:down": "knex migrate:down",
    "migrate:rollback": "knex migrate:rollback",
    "seed": "knex seed:run",
    "dev": "nodemon index",
    "start": "node index"
  },
```

### REST API Documentation
#### Users
| Method   | URL                                | Controller      | Description                            |
| -------- | ---------------------------------- | --------------- | -------------------------------------- |
| GET      | /users                             | indexUsers      | Retrieve all users data                |
| GET      | /user/:userID                      | singleUser      | Retrieve single user's data            |
| PUT      | /user/:userID                      | updateUser      | Update single user's data              |
| DELETE   | /user/:userID                      | deleteUser      | Delete single user's data              |
| GET      | /users/:userID/projects            | userProjects    | Retrieve all user's projects           |
| POST     | /users/:userID/projects            | newProject      | Adds new project by user               |
| GET      | /user/:userID/projects/:projectID  | singleProject   | Retrieve user's individual project     |
| PUT      | /user/:userID/projects/:projectID  | updateProject   | Update user's individual project       |
| DELETE   | /user/:userID/projects/:projectID  | deleteProject   | Delete user's individual project       |
| GET      | /users/:userID/tasks               | userTasks       | Retrieve all user's tasks              |
| POST     | /users/:userID/tasks               | newTask         | Adds new task by user                  |
| GET      | /user/:userID/tasks/:taskID        | singleTask      | Retrieve user's individual task        |
| PUT      | /user/:userID/tasks/:taskID        | updateTask      | Update user's individual task          |
| DELETE   | /user/:userID/tasks/:taskID        | deleteTask      | Delete user's individual task          |

#### Projects
| Method   | URL                                | Controller      | Description                            |
| -------- | ---------------------------------- | --------------- | -------------------------------------- |
| GET      | /projects                          | allProjects     | Retrieve all projects data             |
| GET      | /projects/:projectID/users         | projectUsers    | Retrieve single project's users        |
| GET      | /projects/:projectID/tasks         | projectTasks    | Retrieve single project's tasks        |



### dotenv Configurations

```
PORT=8080
```

### Entity Relationship Diagram

