//install mongoosejs
//require and setup connection
//make schema 
//create model and export

const mongoose = require("mongoose");

//This is saying connect node js through mongoose with mongodb
//127.0.0.1 this is server
//27017 this is server port
//after the port we can name our server
mongoose.connect("mongodb://127.0.0.1:27017/dbName")

//after that we setup schema that will define what things should be in document (document ke ander kya kya item rahenge)

const userschema = mongoose.Schema({
  username: String,
  name: String,
  age: Number
})


//this is creation of model that take two argument, first the model name and second the schema
//then we export this and require this in our index.js
module.exports = mongoose.model("user", userschema);