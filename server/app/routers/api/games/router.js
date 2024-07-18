const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import game-related actions
const {
  browse,
  read,
  add,
  destroy,
} = require("../../../controllers/GameActions");

// Route to get a list of games
router.get("/", browse);

// Route to get a specific game by ID
router.get("/:id", read);

// Route to add a new game
router.post("/add", add);

router.delete("/delete", destroy);
/* ************************************************************************* */

module.exports = router;
