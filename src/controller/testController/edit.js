const saveToDb = require('./saveToDb');
const Test = require('../../db/models/test');

async function edit(body) {
  const { id, fileName, studentClass, category } = body;
  const testModel = Test.findOne({ _id: id });
  if (testModel) {
    return {
      data: {
        message: 'file not found'
      }
    };
  }
  let testObj = {
    fileName,
    studentClass,
    category
  };
  await saveToDb(testObj);
  return {
    data: { message: 'edited' }
  };
}
module.exports = { edit };
