const readyTest = require('../../db/models/createTests/index');

async function getReadyTest(id) {
  return await readyTest.findOne({ _id: id });
}
module.exports = { getReadyTest };
