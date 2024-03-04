const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,

  number: { type: Number, unique: true, required: true },
});

const User = mongoose.model("eakanto", userSchema);

module.exports = User;
