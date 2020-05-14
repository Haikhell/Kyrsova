const createTopic = require('./createTopic');
const csvRead = require('../../helpers/readFile/csv');
const saveToDbReadyTests = require('./saveToDb');
const userModel = require('../../db/models/user');

async function createLastTest(masivTopic, name, login) {
  let test = [];
  for (let i = 0; i < masivTopic.length; i++) {
    let readTest = await csvRead.readAndParseFileCSV(masivTopic[i].fileName);
    let te = await createTopic.test(readTest);
    for (let j = 0; j < masivTopic[i].count; j++) {
      test.push(te[j]);
    }

    // let masiv = await createTopic.createTest(readTest);
  }
  let obj = {};
  obj.nameTest = name;
  obj.test = test;
  let testsModel = await saveToDbReadyTests(obj);
  const userModels = await userModel.findOne({ login });
  let arrayReadyTest = userModels.readyTests;
  arrayReadyTest.push(testsModel._id);
  // console.log(obj);
  await userModel.updateOne({ login }, { $set: { readyTests: arrayReadyTest } });
  return testsModel;
}
module.exports = { createLastTest };
