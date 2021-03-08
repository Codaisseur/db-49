const User = require("./models").user;

const getAllUsers = async () => {
  try {
    const user = await User.findByPk(3);
    const newUser = await User.create({ name: "matias",  age: 20, })
    console.log(user.get({ plain: true }));
  } catch (e) {
    console.log("error");
    console.log(e.message);
  }
};

getAllUsers();


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
