const Contact = require("../Model/Contact");

const contact = async (req, res) => {
  try {
    const { fullname, email, description } = req.body;
    const getContact = new Contact({
      fullname: fullname,
      email: email,
      description: description,
    });
    await getContact.save();
    res.status(200).json({ message: "Submit Successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Something went wrong !!" });
  }
};

module.exports = contact;
