const Test = require('../../db/models/test');

module.exports = async function saveToDB(obj) {
  console.log(obj);
  const testToAdd = new Test({
    fileName: obj.fileName,
    studentClass: obj.studentClass,
    category: obj.category
  });
  const save = await testToAdd.save();
  return save;
};
