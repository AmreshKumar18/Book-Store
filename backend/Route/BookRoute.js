const express = require("express");
const getBook = require("../Controller/BookController");

const router = express.Router();

router.get("/", getBook);

module.exports = router;
