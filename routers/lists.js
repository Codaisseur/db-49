const { Router } = require("express");

const router = new Router();

// Made in a very lazy way, all this routes are dummies
router.get("/", async (req, res, next) => {
  console.log("Im in the router!");
  res.send("oneList");
});

router.post("/", async (req, res, next) => {
  console.log("Im in the router!");
  res.send("create a list");
});

router.get("/:id", async (req, res, next) => {
  console.log("Im in the router!");
  res.send("by id");
});

module.exports = router;
