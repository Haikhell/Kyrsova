const User = require('../../db/models/user');

async function getUser(id) {
  let userModel = await User.findOne({ _id: id });
  if (!userModel) {
    return {
      data: { message: 'Not found user' }
    };
  }
  return {
    data: {
      user: userModel
    }
  };
}

module.exports = { getUser };
