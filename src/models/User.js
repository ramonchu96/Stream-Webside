//Require librery from mongoDB
const { Schema, model } = require("mongoose");
//Crypt librery
const bcrypt = require("bcryptjs");

//Struct creation User from the database
const UserSchema = new Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

//Method to encrypt the password
UserSchema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};
//Valid the password
UserSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = model('User', UserSchema);