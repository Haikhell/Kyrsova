const User = require('../../db/models/user');

module.exports = async function saveToDB(obj) {
  const userToAdd = new User({
    firstName: obj.firstName,
    lastName: obj.lastName,
    login: obj.login,
    password: obj.password
  });
  const save = await userToAdd.save();
  return save;
};
