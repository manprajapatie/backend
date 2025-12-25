var express = require('express');
var router = express.Router();

const mongoose = require('mongoose')
// const plm = require("passport-local-mongoose")
const passportLocalMongoose = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/textDB")


const userSchema = mongoose.Schema({
  // don't need of them >> userSchema.plugin(plm) this will add these field for use and handle it more securely
  // username: String,
  // password: String,
  secret: String
});

// userSchema.plugin(plm)
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("user", userSchema)
