const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  title: String,
  description: String,
  publisher: String,
  language: String,
  category: String,
  image: String,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
