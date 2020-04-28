const saveToDb = require('./saveToDb');
const Test = require('../../db/models/test');

async function get(id) {
  const testModel = Test.findOne({ _id: id });
  if (testModel) {
    return {
      data: {
        message: 'file not found'
      }
    };
  }
  let testObj = {
    fileName: testModel.fileName,
    studentClass: testModel.studentClass,
    category: testModel.category
  };
  return {
    data: {
      test: testObj
    }
  };
}
module.exports = { get };
