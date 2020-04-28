const security = require('../../helpers/security');
const saveToDb = require('./saveToDb');
const User = require('../../db/models/user');

async function registUser(body) {
  const { login, password, firstName, lastName, email } = body;
  let userModel = await User.findOne({ login });
  if (userModel) {
    return {
      data: { message: 'login is allready used' }
    };
  }
  const hashPassword = await security.hash(password);
  const userObj = {
    firstName,
    lastName,
    login,
    email,
    password: hashPassword
  };

  await saveToDb(userObj);
  return {
    data: {
      user: userObj
    }
  };
}

module.exports = { registUser };
