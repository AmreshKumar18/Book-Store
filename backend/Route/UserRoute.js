const express = require("express");
const signup = require("../Controller/UserController");
const login = require("../Controller/UserController");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

module.exports = router;
