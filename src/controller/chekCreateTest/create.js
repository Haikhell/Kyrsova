function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [ array[i], array[j] ] = [ array[j], array[i] ];
  }
}

async function createTest(tests) {
  let test = [];
  for (let i = 0; i < tests.length; i++) {
    let tempMas = [];
    let tempObj = {};
    tempObj.question = tests[i][0];
    for (let j = 3; j < Object.keys(tests[i]).length; j++) {
      tempMas.push(tests[i][j.toString()]);
    }
    shuffle(tempMas);

    tempObj.answers = tempMas;
    test.push(tempObj);
  }
  shuffle(test);
  return test;
}

module.exports = { createTest };
