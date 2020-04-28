const security = require('../../helpers/security');
const saveToDb = require('./saveToDb');
const User = require('../../db/models/user');

async function loginUser(body) {
  const { login, password } = body;
  let userModel = await User.findOne({ login });
  if (!userModel) {
    return {
      data: { message: 'login not found' }
    };
  }
  const passwordEquals = await security.compare(password, userModel.password);
  if (!passwordEquals) {
    return {
      data: {
        message: 'password or login not valid'
      }
    };
  }
  const userObj = {
    login,
    firstName: userModel.firstName,
    lastName: userModel.lastName,
    email: email
  };
  return {
    data: {
      user: userObj
    }
  };
}

module.exports = { loginUser };
