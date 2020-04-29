const saveToDb = require('./saveToDb');
const Test = require('../../db/models/test');

async function getById(id) {
  const testModel = Test.findOne({ _id: id });
  if (testModel) {
    return {
      status: 400,
      data: {
        message: 'Файл не знайдено'
      }
    };
  }
  let testObj = {
    fileName: testModel.fileName,
    studentClass: testModel.studentClass,
    category: testModel.category,
    format: testModel.format,
    topic: testModel.topic,
    originName: testModel.originName
  };
  return {
    data: {
      test: testObj
    }
  };
}

async function getAll() {}
module.exports = { getById, getAll };
