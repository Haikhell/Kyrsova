const readyTest = require('../../db/models/createTests/index');

async function findAnswer(masivTest, question, answer) {
  for (let i = 0; i < masivTest.length; i++) {
    if (masivTest[i].question == question) {
      if (masivTest[i].answer == answer) {
        return masivTest[i].bal;
      }
      return 0;
    }
  }
}

async function verifyTest(test, id, name) {
  let model = await readyTest.findOne({ _id: id });
  bal = 0;
  for (let i = 0; i < test.length; i++) {
    bal += await findAnswer(model.test, test[i].question, test[i].answer);
  }
  return bal;
}

module.exports = { verifyTest };
