const security = require('../../helpers/security');
const saveToDb = require('./saveToDb');

module.exports = async function registUser(login, password, firstName, lastName) {
  let userModel = User.find({ login });
  if (userModel) {
    return {
      data: { message: 'login is allready used' }
    };
  }
  const hashPassword = security.hash(password);
  const userObj = {
    firstName,
    lastName,
    login,
    password: hashPassword
  };

  await saveToDb(userObj);
  return {
    data: {
      user: userObj
    }
  };
};
