const express = require("express");
const {
  profileController,
  signInController,
  signUpController,
  createUser,
  createSession,
} = require("../controllers/users_controller");
const router = express.Router();

router.get("/signup", signUpController); // serve ejs signup page
router.get("/signin", signInController); // serve ejs signin page
router.get("/profile", profileController); // serve the page once successfully logged in
router.post("/create", createUser); // create a user
router.post("/session", createSession); // create a session

module.exports = router;
