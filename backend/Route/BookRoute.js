import express from "express";
import { getBook } from "../Controller/BookController.js";
import { detailsBook } from "../Controller/BookController.js";

const router = express.Router();

router.get("/", getBook);
router.get("/:id", detailsBook);

export default router;
