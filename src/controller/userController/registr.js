const security = require('../../helpers/security');
const saveToDb = require('./saveToDb');
const User = require('../../db/models/user');

async function registUser(body) {
  const { login, password, firstName, lastName, email } = body;
  let userModel = await User.findOne({ login });
  if (userModel) {
    return {
      data: { message: 'Логін уже існує' }
    };
  }
  const hashPassword = await security.hash(password);
  const userObj = {
    firstName,
    lastName,
    login,
    email,
    password: hashPassword,
    tests: []
  };

  await saveToDb(userObj);
  return {
    status: 200,
    data: {
      user: userObj
    }
  };
}

module.exports = { registUser };
