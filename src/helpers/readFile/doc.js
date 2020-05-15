const fs = require('fs');
const doc = require('docx-parser');

async function readDoc(filename) {
  let pathFile = `./uploads/${filename}`;

  return new Promise((resolve, reject) => {
    doc.parseDocx(pathFile, function(data) {
      if (!data) {
        reject('cannot read file');
      }
      resolve(data);
    });
  });
}

async function parseDocx(filename) {
  let data = await readDoc(filename);
  if (!data) {
    console.log('cannot read');
    return;
  } else {
    let objectsToReturn = [];
    let tasks = data.split('$$$$');
    tasks.splice(0, 1); //видалення першого елемента бо там пустий символ після спліта
    //console.log(tasks);
    for (let index = 0; index < tasks.length; index++) {
      let taskObject = {};
      let oneTask = tasks[index].split('$$$');
      if (oneTask[0].indexOf('$') > -1) {
        taskObject['2'] = parseInt(oneTask[0].split('$')[0]);
        taskObject['0'] = oneTask[0].split('$')[1];
      } else {
        taskObject['2'] = 1;
        taskObject['0'] = oneTask[0];
      }
      let variants = [];
      for (let index2 = 1; index2 < oneTask.length; index2++) {
        if (oneTask[index2].indexOf('^') > -1) {
          taskObject['1'] = oneTask[index2].split('^')[1];
          variants.push(oneTask[index2].split('^')[1]);
        } else {
          variants.push(oneTask[index2]);
        }
      }
      taskObject.answers = variants;
      objectsToReturn.push(taskObject);
    }
    return objectsToReturn;
  }
}

module.exports.readDoc = readDoc;
module.exports.parseDocx = parseDocx;
