const security = require('../../helpers/security');
const saveToDb = require('./saveToDb');

async function loginUser(login, password) {
  let userModel = User.find({ login });
  if (!userModel) {
    return {
      data: { message: 'login not found' }
    };
  }
  const hashPassword = security.hash(password);
  const userObj = {
    login,
    password: hashPassword,
    name
  };
  await saveToDb(userObj);
  return {
    data: {
      user: userObj
    }
  };
}
