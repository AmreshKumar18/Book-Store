const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const BookRoute = require("./Route/BookRoute");
const UserRoute = require("./Route/UserRoute");
const ContactRoute = require("./Route/ContactRoute");
const app = express();

app.use(cors());
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGODB_URL = process.env.MONGO_URL;

// mongodb connection

try {
  mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("connteced to mongodb");
} catch (error) {
  console.log(error);
}

//routing
app.use("/book", BookRoute);
app.use("/user", UserRoute);
app.use("/contact", ContactRoute);
app.use("/product-details", BookRoute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
