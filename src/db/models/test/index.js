const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testSchema = new Schema({
  fileName: String,
  category: String,
  studentClass: Number,
  format: String
});
module.exports = mongoose.model('Tests', testSchema);
