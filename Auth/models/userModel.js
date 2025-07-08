const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true // validé avec plugin
  },
  password: {
    type: String,
    required: true
  }
});

userSchema.plugin(uniqueValidator, { message: "L’email est déjà utilisé." });

module.exports = mongoose.model("User", userSchema);
