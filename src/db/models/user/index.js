const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  login: String,
  password: String
});
module.exports = mongoose.model('Users', userSchema);
