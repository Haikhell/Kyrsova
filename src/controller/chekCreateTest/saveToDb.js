const Createtests = require('../../db/models/createTests');

module.exports = async function saveToDB(obj) {
  const userToAdd = new Createtests({
    nameTest: obj.nameTest,
    test: obj.test
  });
  const save = await userToAdd.save();
  return save;
};
