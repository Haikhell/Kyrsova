const express = require('express');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

const csv = require('../../../helpers/readFile').csvRead;
const testCreateChekController = require('../../../controller').testCreateChekController;
const testController = require('../../../controller').testController;

const router = express.Router();

router.get('/get', async (req, res) => {
  let test = await testController.get.get(req.params.id);

  res.send(test);
});
router.post('/upload', upload.single('tasks'), async function(req, res, next) {
  req.body.fileName = req.file.filename;
  // let body = {
  //   fileName: ,
  //   category: req.body.category,
  //   studentClass: Number(req.body.studentClass),
  //   format: req.body.format
  // };
  let model = await testController.create.createTest(req.body);
  if (!model) {
    res.send('error');
  }
  res.send('good');
  // let test = await csv.readAndParseFileCSV(req.file.filename);
  // let result = await testCreateChekController.create.createTest(test);
  // console.log(result);
  // req.file - файл `avatar`
  // req.body сохранит текстовые поля, если они будут
});
router.post('/create', async (req, res) => {
  let test = await testController.create.create(req.body);
  res.send(test);
});
router.post('/edit', async (req, res) => {
  let test = await testController.edit.edit(req.body);
  res.send(test);
});
module.exports = router;
