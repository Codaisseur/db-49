const express = require("express");
const PORT = 4001;
const User = require("./models").user;

const listRouter = require("./routers/lists");
const userRouter = require("./routers/users");
const { loggingMiddleware } = require("./middlewares");
const app = express();

// Body parser

// Registering a middleware at application level
app.use(loggingMiddleware);
app.use(express.json());

// Registering the router to the app
app.use("/lists", listRouter);
app.use("/users", userRouter);

// Registering a middleware to a specific route
app.get("/test", (req, res) => {
  console.log(req.matias);
  res.json("hello from server");
});

app.get("/test/2", (req, res) => {
  res.json("second test");
});

app.listen(PORT, () => console.log(`Server running at port: ${PORT}`));
