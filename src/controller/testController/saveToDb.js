const Test = require('../../db/models/test');

module.exports = async function saveToDB(obj) {
  const testToAdd = new Test({
    fileName: obj.fileName,
    studentClass: obj.studentClass,
    category: obj.category,
    format: obj.format,
    topic: obj.topic,
    originName: obj.originName
  });
  const save = await testToAdd.save();
  return save;
};
