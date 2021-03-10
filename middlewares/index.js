const failRandomMiddleware = (req, res, next) => {
  const failed = Math.random() * 10 < 4;
  if (failed) {
    res.status(500).send("middleware failed");
  } else {
    next();
  }
};

const loggingMiddleware = (req, res, next) => {
  console.log("Request incoming, type of request", req.method, new Date());
  req.matias = "Hellooooooo";
  next();
};

const auth = (req, res, next) => {
  const token = req.headers;
  // check this token

  // if it's valid, it will tell you the user id of the guy

  // query for user 4

  req.user = user;
};

module.exports = { loggingMiddleware, failRandomMiddleware };
