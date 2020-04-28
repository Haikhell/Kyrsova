async function find(tests, oneAnswer) {
  for (let i = 0; i < tests.length; i++) {
    if (tests[i]['0'] == oneAnswer.question) {
      if (oneAnswer.answers == test[i]['1']) {
        return Number(test[i]['2']);
      }
    }
  }
  return 0;
}

async function chekTest(test, answer) {
  let bal = 0;
  for (let i = 0; i < answer.length; i++) {
    bal += await find(test, answer[i]);
  }
  return bal;
}

module.exports = { chekTest };
