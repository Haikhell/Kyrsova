const fs = require('fs');
const csv = require('csv-parser');

const config = '';

async function readAndParseFileCSV(name) {
  return new Promise((resolve, reject) => {
    var masivTestObj = [];
    const filePath = `./uploads/${name}`;
    fs
      .createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => {
        let textMasiv = row['0'].split('||');
        tempObj = {};
        tempObj.answers = [];
        for (let i = 0; i < textMasiv.length; i++) {
          if (i > 2) {
            tempObj.answers.push(textMasiv[i]);
          } else {
            tempObj[`${i}`] = textMasiv[i];
          }
        }
        masivTestObj.push(tempObj);
      })
      .on('end', () => resolve(masivTestObj))
      .on('error', (err) => reject(err));
  });
}

module.exports = { readAndParseFileCSV };
