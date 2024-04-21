const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
  fullname: String,
  email: String,
  description: String,
});

const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
