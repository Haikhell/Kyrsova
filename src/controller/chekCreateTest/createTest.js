const createTopic = require('./createTopic');
const csvRead = require('../../helpers/readFile/csv');
const parseDocx = require('../../helpers/readFile/doc');
const saveToDbReadyTests = require('./saveToDb');
const userModel = require('../../db/models/user');
const testModel = require('../../db/models/test');

async function createLastTest(masivTopic, name, login) {
  let test = [];
  for (let i = 0; i < masivTopic.length; i++) {
    let readTest;
    let format = await testModel.findOne({ fileName: masivTopic[i].fileName }).format;
    if (format == 'csv') {
      readTest = await csvRead.readAndParseFileCSV(masivTopic[i].fileName);
    } else {
      readTest = await parseDocx.parseDocx(masivTopic[i].fileName);
    }
    let te = await createTopic.test(readTest);
    for (let j = 0; j < masivTopic[i].count; j++) {
      test.push(te[j]);
    }

    // let masiv = await createTopic.createTest(readTest);
  }
  let obj = {};
  obj.nameTest = name;
  obj.test = test;
  let testsModels = await saveToDbReadyTests(obj);
  const userModels = await userModel.findOne({ login });
  let arrayReadyTest = userModels.readyTests;
  arrayReadyTest.push(testsModels._id);
  await userModel.updateOne({ login }, { $set: { readyTests: arrayReadyTest } });
  console.log(testsModels);
  return testsModels;
}
module.exports = { createLastTest };
