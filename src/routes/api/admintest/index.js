const express = require('express');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });

const csv = require('../../../helpers/readFile').csvRead;
const testCreateChekController = require('../../../controller').testCreateChekController;
const testController = require('../../../controller').testController;

const router = express.Router();

// router.get('/get', async (req, res) => {
//   let test = await testController.get.get(req.params.id);
//   res.send(test);
// });
router.post('/upload', upload.single('tasks'), async function(req, res, next) {
  req.body.fileName = req.file.filename;
  req.body.originName = req.file.originalname;
  let model = await testController.create.createTest(req.body);
  if (!model) {
    res.send('error');
  }
  res.send(model);
});
router.post('/createtest', async (req, res) => {
  testCreateChekController.createLastTest.createLastTest(req.body.masiv);
});
// router.post('/edit', async (req, res) => {
//   let test = await testController.edit.edit(req.body);
//   res.send(test);
// });
module.exports = router;
