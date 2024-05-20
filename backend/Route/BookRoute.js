const express = require("express");
const getBook = require("../Controller/BookController");
const detailsBook = require("../Controller/detailsBook");

const router = express.Router();

router.get("/", getBook);
router.get("/:id", detailsBook);

module.exports = router;
