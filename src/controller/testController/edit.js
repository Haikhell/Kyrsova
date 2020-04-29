const saveToDb = require('./saveToDb');
const Test = require('../../db/models/test');

async function edit(body) {
  const { id, fileName, studentClass, category, format, topic, originName } = body;
  const testModel = Test.findOne({ _id: id });
  if (testModel) {
    return {
      status: 400,
      data: {
        message: 'файл не знайдено'
      }
    };
  }
  let testObj = {
    fileName,
    studentClass,
    category,
    format,
    topic,
    originName
  };
  await Test.updateOne({ fileName }, { $set: testObj });
  return {
    data: { message: 'Змінено' }
  };
}
module.exports = { edit };
