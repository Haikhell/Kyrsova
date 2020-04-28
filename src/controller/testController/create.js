const saveToDb = require('./saveToDb');

async function createTest(body) {
  const { fileName, studentClass, category } = body;
  let fileObj = {
    fileName,
    studentClass,
    category
  };
  await saveToDb(fileObj);
  return {
    data: {
      message: 'created'
    }
  };
}
module.exports = { createTest };
