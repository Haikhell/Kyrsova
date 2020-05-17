const User = require('../../db/models/user');
const CreatedTest = require('../../db/models/createTests');

async function getComplited(id) {
  let user = await User.findOne({ login: id });
  if (!user) {
    return {
      status: 400,
      data: { message: 'Юзера не знайдено' }
    };
  }
  return user.complitedTests;
}

async function postComplited(body, mark) {
  let user = await User.findOne({ _id: body.userId });
  if (!user) {
    return {
      status: 400,
      data: { message: 'Юзера не знайдено' }
    };
  }
  let testNameToAdd = await CreatedTest.findOne({ _id: body.id });
  let complitedTests = user.complitedTests;
  let isTest = false;
  for (let i = 0; i < complitedTests.length; i++) {
    if (complitedTests[i].testName == testNameToAdd.nameTest) {
      complitedTests[i].complitedByUser.push({
        userName: body.name,
        tests: body.test,
        mark
      });
      isTest = !isTest;
    }
  }
  if (!isTest) {
    let newComplitedTest = {
      testName: testNameToAdd.nameTest,
      complitedByUser: [
        {
          userName: body.name,
          tests: body.test,
          mark
        }
      ]
    };
    complitedTests.push(newComplitedTest);
  }

  await User.update({ _id: body.userId }, { $set: { complitedTests } });
  return {
    status: 200,
    data: { message: 'OK' }
  };
}

module.exports = { getComplited, postComplited };
