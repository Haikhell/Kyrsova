const User = require('../../db/models/user');

async function searchByCategory(body) {
  const { login, category } = body;
  let userModel = await User.findOne({ login });
  if (!userModel) {
    return {
      status: 400,
      data: { message: 'Юзера не знайдено' }
    };
  }
  let mas = [];
  let task = userModel.tests;
  for (let i = 0; i < task.length; i++) {
    if (task[i].category == category) {
      mas.append(task[i]);
    }
  }

  return {
    status: 200,
    data: {
      tests: task
    }
  };
}

module.exports = { searchByCategory };
