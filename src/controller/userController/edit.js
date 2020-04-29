const saveToDb = require('./saveToDb');
const User = require('../../db/models/user');

async function editUser(body) {
  const { login, firstName, lastName, email } = body;
  let userModel = await User.findOne({ login });
  if (!userModel) {
    return {
      status: 200,
      data: { message: 'Логін не знайдено' }
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
  let a = await User.updateOne({ login }, { $set: userObj });
  return {
    status: 200,
    data: {
      user: userObj
    }
  };
}

module.exports = { editUser };
