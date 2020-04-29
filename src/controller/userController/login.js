const security = require('../../helpers/security');
const saveToDb = require('./saveToDb');
const User = require('../../db/models/user');

async function loginUser(body) {
  const { login, password } = body;
  let userModel = await User.findOne({ login });
  if (!userModel) {
    return {
      data: { message: 'логін не знайдено' }
    };
  }
  const passwordEquals = await security.compare(password, userModel.password);
  if (!passwordEquals) {
    return {
      data: {
        message: 'неправельний логін або пароль'
      }
    };
  }
  const userObj = {
    login,
    firstName: userModel.firstName,
    lastName: userModel.lastName,
    email: userModel.email,
    tests: userModel.tests
  };
  return {
    status: 200,
    data: {
      user: userObj
    }
  };
}

module.exports = { loginUser };
