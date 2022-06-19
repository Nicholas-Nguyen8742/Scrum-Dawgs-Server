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

### dotenv Configurations

```
PORT=8080
```

### Entity Relationship Diagram

