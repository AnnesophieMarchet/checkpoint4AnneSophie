const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import user-related actions

const { browse, add, getProfile } = require("../../../controllers/UserActions");
const { hashPassword, verifyCookie } = require("../../../services/auth");
const { login, logout } = require("../../../controllers/AuthActions");

router.get("/", browse);
router.post("/login", login);
router.get("/logout", logout);
router.post("/registers", hashPassword, add);

// /* ***********************Route Protégé ************************************************** */
router.get("/profil-connected", verifyCookie, getProfile);

module.exports = router;
