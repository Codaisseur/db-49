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

## Relations

### setting up

- Migration for new column.
- create new column and add `references` to a model and key in model.
- migrate and be sure all is ok
- Set up relations in the models:

```js
// in user model
user.hasMany(models.todoList);

// in todoList model
todoList.belongsTo(models.user);
```

## Many to many

1. Create models that we want to join first (todoItem and Tag)
2. Create the join table with both foreign keys (itemTag => tagId, todoItemId)
3. Set up relations in the models:
   3.1 Models between themselves
   3.2 Join table to models
4. try it out with some queries
