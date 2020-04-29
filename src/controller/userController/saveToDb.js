const User = require('../../db/models/user');

module.exports = async function saveToDB(obj) {
  const userToAdd = new User({
    firstName: obj.firstName,
    lastName: obj.lastName,
    login: obj.login,
    password: obj.password,
    email: obj.email,
    tests: obj.tests
  });
  const save = await userToAdd.save();
  return save;
};
