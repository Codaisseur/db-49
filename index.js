const express = require("express");
const PORT = 4001;
const User = require("./models").user;
const app = express();

// Body parser
app.use(express.json());

app.get("/test", (req, res) => {
  res.json("hello from server");
});

app.get("/users", async (req, res, next) => {
  try {
    console.log("Im getting all the users");
    const users = await User.findAll();
    res.send(users);
  } catch (e) {
    next(e);
  }
});

app.post("/users", async (request, res, next) => {
  try {
    console.log("body", request.body);
    const { email, name, password } = request.body;
    if (!email) {
      res.status(400).send("Users require an email to be created");
    } else {
      const newUser = await User.create({ email, name, password });
      res.send(newUser);
    }
  } catch (e) {
    next(e);
  }
});

app.patch("/users/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { age } = req.body;

    const userToUpdate = await User.findByPk(id);

    console.log("new age: ", age);

    if (!userToUpdate) {
      return res.status(404).send("user not found");
    }

    await userToUpdate.update({ age });

    res.send(userToUpdate);
  } catch (e) {
    next(e);
  }
});

app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));
