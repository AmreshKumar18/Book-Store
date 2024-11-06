import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import BookRoute from "./Route/BookRoute.js";
import UserRoute from "./Route/UserRoute.js";
import ContactRoute from "./Route/ContactRoute.js";
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
