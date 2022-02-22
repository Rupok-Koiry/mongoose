const mongoose = require("mongoose");

//Schema Creation like javascript Class
const blogSchema = new mongoose.Schema({
  //Write all the fields of the blog
  title: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 255,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    //Default value if value is not provided
    default: "Rupok Koiry",
  },
});
// Mongoose Schema vs Model. ... A Mongoose schema defines the structure of the document, default values, validators, etc., whereas a Mongoose model provides an interface to the database for creating, querying, updating, deleting records, etc

//Model Creation like javascript object creation from class
const blogModel = mongoose.model("Blog", blogSchema);

//Export the model to use other files
module.exports = blogModel;
