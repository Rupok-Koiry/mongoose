const express = require("express");
const app = express();
const blogModel = require("./models/blogSchema");
const cors = require("cors");
//Cross Origin Resource Sharing
app.use(cors());
//To parse the body of the request
app.use(express.json());

app.post("/create", async (req, res) => {
  console.log(req.body);

  const blog = new blogModel(req.body);
  await blog.save();
  // Create a new blog Method : 1
  //   const blog = new blogModel({
  //     title: "My Second Blog",
  //     description: "This is my Secod blog",
  //     author: "John",
  //   });
  //   await blog.save();

  // Create a new blog Method : 2

  //   await blogModel.create({
  //     title: "My First Blog",
  //     description: "This is my first blog",
  //     author: "Rupok Koiry",
  //   });
  res.send("blog created successfully");
});

module.exports = app;
