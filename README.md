## First server

1. Setup:

- Creating a new database DONE
- Modifying `config.json` to connect to out database DONE
- Testing that all is good DONE
- Modify line in models/index.js to use config.url.

2. Models

- Create a model DONE
- `Migrate` a model to the DB (create a table based on the model). DONE
- Create a seed file. DONE
- Add some data through seed files.

Seed files: Files that have some dummy/testing data that we can load to our database.

Creating models:

- npx sequelize-cli model:generate --name <modelName> --attributes <modelAttributes | databaseColumns>
