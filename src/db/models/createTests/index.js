const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const createTestSchema = new Schema({
  nameTest: String,
  test: [ Object ]
});
module.exports = mongoose.model('Createtests', createTestSchema);
