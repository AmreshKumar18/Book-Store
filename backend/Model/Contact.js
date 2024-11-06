import mongoose from "mongoose";

const contactSchema = mongoose.Schema({
  fullname: String,
  email: String,
  description: String,
});

export const Contact = mongoose.model("Contact", contactSchema);
