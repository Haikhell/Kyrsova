const User = require('../../db/models/user');

async function getUserById(id) {
  let userModel = await User.findOne({ _id: id });
  if (!userModel) {
    return {
      status: 400,
      data: { message: 'Юзера не знайдено' }
    };
  }
  return {
    status: 200,
    data: {
      user: userModel
    }
  };
}

async function getUserByLogin(login) {
  let userModel = await User.findOne({ login: login });
  if (!userModel) {
    return {
      status: 400,
      data: { message: 'Юзера не знайдено' }
    };
  }
  return {
    status: 200,
    data: {
      user: userModel
    }
  };
}
async function getCategory(login) {
  let userModel = await User.findOne({ login: login });
  if (!userModel) {
    return {
      status: 400,
      data: { message: 'Юзера не знайдено' }
    };
  }

  return {
    status: 200,
    data: {
      tests: userModel.tests
    }
  };
}
async function getAllTest(login) {
  let userModel = await User.findOne({ login });
  return userModel.readyTests;
}
module.exports = { getUserById, getUserByLogin, getCategory, getAllTest };
