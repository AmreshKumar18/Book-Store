import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
  title: String,
  description: String,
  publisher: String,
  language: String,
  category: String,
  image: String,
});

export const Book = mongoose.model("Book", bookSchema);
