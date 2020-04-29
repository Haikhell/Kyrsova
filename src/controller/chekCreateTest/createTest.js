const createTopic = require('./createTopic');
const csvRead = require('../../helpers/readFile/csv');

async function createLastTest(masivTopic) {
  let test = [];
  for (let i = 0; i < masivTopic.length; i++) {
    let readTest = await csvRead.readAndParseFileCSV(masivTopic[i].fileName);
    let masiv = await createTopic.createTest(readTest);
    for (let j = 0; j < masivTopic[i].count; j++) {
      test.push(masiv[j]);
    }
  }
  return test;
}
module.exports = { createLastTest };
