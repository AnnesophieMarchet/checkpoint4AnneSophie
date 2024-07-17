const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const gamesRouter = require("./games/router");

router.use("/games", gamesRouter);

const usersRouter = require("./users/router");

router.use("/users", usersRouter);
/* ************************************************************************* */

module.exports = router;
