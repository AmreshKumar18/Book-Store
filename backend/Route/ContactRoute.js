const express = require("express");
const contact = require("../Controller/ContactController");

const router = express.Router();

router.post("/", contact);

module.exports = router;
