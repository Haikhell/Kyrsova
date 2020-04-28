const saveToDb = require('./saveToDb');
const User = require('../../db/models/user');

async function editUser(body) {
  const { login, firstName, lastName, email } = body;
  let userModel = await User.findOne({ login });
  if (!userModel) {
    return {
      data: { message: 'login not found' }
    };
  }
  userObj = {
    login,
    firstName,
    lastName,
    email,
    password: userModel.password,
    tests: body.tests
  };
  await saveToDb(userObj);
  return {
    data: {
      user: userObj
    }
  };
}

module.exports = { editUser };
