const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');
const userSchema = mongoose.Schema({
  fullName: String,
  email: {type:String, required:true, unique: true},
  password: String,
  confirmPwd: String,
  address: String,
  tel:String
});

userSchema.plugin(uniqueValidator);
const user = mongoose.model("User", userSchema);
module.exports = user;
