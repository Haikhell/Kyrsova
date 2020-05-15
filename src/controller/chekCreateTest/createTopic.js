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
    //  await shuffle(tempMas);

    tempObj.answers = tempMas;
    test.push(tempObj);
  }
  //await shuffle(test);
  return test;
}
async function test(test) {
  let tempMasiv = [];
  for (let i = 0; i < test.length; i++) {
    let temp = {};
    temp.question = test[i][0];
    temp.answer = test[i][1];
    temp.bal = test[i][2];
    temp.answers = test[i].answers;
    tempMasiv.push(temp);
  }
  return tempMasiv;
}

module.exports = { createTest, test };
