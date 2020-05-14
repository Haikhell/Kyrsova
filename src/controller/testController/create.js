const saveToDb = require('./saveToDb');
const userController = require('../userController');
const parserCsv = require('../../helpers/readFile/csv');
const parserDoc = require('../../helpers/readFile/doc');

async function loadToDbTest(body) {
  console.log(body);

  const { fileName, studentClass, category, format, topic, originName, login } = body;
  let count;
  console.log(fileName);
  if (format == 'csv') {
    let ms = await parserCsv.readAndParseFileCSV(fileName);
    count = ms.length;
    console.log(count);
  } else {
    let ms = await parserDoc.readDoc(fileName);
    count = ms.length;
  }
  let fileObj = {
    fileName,
    studentClass,
    category,
    format,
    topic,
    originName
  };
  let data = (await userController.get.getUserByLogin(login)).data.user;

  if (!data) {
    return 'error';
  }
  masiv = [];

  masiv = data.tests;
  for (let i = 0; i < masiv.length; i++) {
    if (masiv[i].category == category) {
      masiv[i].test.topic.push(topic);
      masiv[i].test.filesName.push(fileName);
      masiv[i].test.count.push(count);
    } else if (i + 1 == masiv.length) {
      masiv.push({
        category: category,
        test: {
          topic: [],
          filesName: [],
          count: []
        }
      });
    }
  }
  //console.log(masiv);
  if (masiv.length == 0) {
    masiv.push({
      category: category,
      test: {
        topic: [ topic ],
        filesName: [ fileName ],
        count: [ count ]
      }
    });
  }

  let bod = {
    login: data.login,
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: data.password,
    tests: masiv
  };

  await userController.edit.editUser(bod);
  await saveToDb(fileObj);
  return {
    status: 200,
    data: {
      message: 'created'
    }
  };
}
module.exports = { loadToDbTest };
