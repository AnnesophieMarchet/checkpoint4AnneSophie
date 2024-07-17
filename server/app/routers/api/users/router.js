const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import user-related actions

const { browse } = require("../../../controllers/UserActions");

router.get("/", browse);

module.exports = router;
