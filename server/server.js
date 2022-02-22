const mongoose = require("mongoose");
require("dotenv").config();
const app = require("./app");

//Learn IIFE : Immediately Invoked Function Expression & replace connetDB with IIFE
const connectDB = async () => {
  try {
    await mongoose.connect(
      //MongoDB connecting URI
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.wmgad.mongodb.net/mongoose?retryWrites=true&w=majority`
    );
    console.log("DB Connected");
  } catch (error) {
    console.log("DB Connection : " + error.message);
  }
};
connectDB();

app.listen(8000, () => {
  console.log("App running on port 8000");
});
