const express = require("express");
const postsController = require("../controllers/posts_controller");
const router = express.Router();

router.get("/", postsController);

module.exports = { postsRouter: router };
