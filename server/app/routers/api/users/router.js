const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import user-related actions

const { browse, add } = require("../../../controllers/UserActions");
const { hashPassword } = require("../../../services/auth");

router.get("/", browse);
// router.post("/login", login);
// router.get("/logout", logout);
router.post("/registers", hashPassword, add);

// /* ***********************Route Protégé ************************************************** */
// router.get("/profil-connected", verifyCookie, getProfile);

module.exports = router;
