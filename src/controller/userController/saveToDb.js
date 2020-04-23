const user = require('../../db/models/user');

module.exports = async function saveToDB(obj) {
  const userToAdd = new Item({
    firstName: obj.firstName,
    lastName: obj.lastName,
    login: obj.login,
    password: obj.password
  });
  const save = await userToAdd.save();
  return save;
};
