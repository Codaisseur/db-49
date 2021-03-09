const User = require("./models").user;
const TodoList = require("./models").todoList;
const TodoItem = require("./models").todoItem;

const getAllUsers = async () => {
  try {
    const user = await User.findByPk(3);
    const newUser = await User.create({ name: "matias", age: 20 });
    console.log(user.get({ plain: true }));
  } catch (e) {
    console.log("error");
    console.log(e.message);
  }
};
// getAllUsers();

const getUserWithLists = async id => {
  try {
    const user = await User.findByPk(id, {
      include: [TodoList],
    });
    console.log(user.get({ plain: true }));
  } catch (e) {
    console.log(e.message);
  }
};

getUserWithLists(1);

// CRUD => Create Read Update Delete
//
// Most used querying methods
// READ: findAll, findByPk, findOne
// Create: .create
// Update: .update
// Delete: .destroy

const getAllItems = async () => {
  try {
    const items = await TodoItem.findAll();
    const cleanLog = items.map(item => item.get({ plain: true }));
    console.log(cleanLog);
  } catch (e) {
    console.log(e.message);
  }
};
// getAllItems();

const getImportantItems = async () => {
  try {
    const items = await TodoItem.findAll({
      where: { important: true },
    });
    const cleanLog = items.map(item => item.get({ plain: true }));
    console.log(cleanLog);
  } catch (e) {
    console.log(e.message);
  }
};
// getImportantItems();

const getOneItem = async id => {
  try {
    const item = await TodoItem.findByPk(id);
    console.log(item.get({ plain: true }));
  } catch (e) {
    console.log(e.message);
  }
};
// getOneItem(2);

const signUpNewUser = async (email, password, name, age) => {
  try {
    const newUser = await User.create({ email, password, name, age });
    console.log(newUser);
  } catch (e) {
    console.log(e.message);
  }
};

// signUpNewUser("newguy2@gmail.com", "123", "newGuy", 35);

const updateUserAge = async (id, age) => {
  try {
    const thisSpecificUser = await User.findByPk(id);

    if (!thisSpecificUser) {
      console.log("that user doesn't exist");
    } else {
      await thisSpecificUser.update({ age });
      console.log(thisSpecificUser);
    }
  } catch (e) {
    console.log(e.message);
  }
};
// updateUserAge(10, 29);

/*
const app = ""; ///


app.get('/users', (req, res, next) => {
  try {
    const users = await User.findAll();
    res.json(users)
  } catch(e) {
    console.log('error');
  }
})

app.post('/signup', (req, res) => {
  try {
    const { name, age, email, password } = req.body;
    const newUser = await User.create({ name, age, email, password });
    res.json(newUser);
  } catch(e) {
    console.log(e.message);
  }
})

*/
