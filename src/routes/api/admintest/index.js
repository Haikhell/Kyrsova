const express = require('express');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
const User = require('../../../db/models/user');

const csv = require('../../../helpers/readFile').csvRead;
const testCreateChekController = require('../../../controller').testCreateChekController;
const testController = require('../../../controller').testController;
const userController = require('../../../controller').userController;
const readyTestController = require('../../../controller').readyTestController;

const router = express.Router();

// router.get('/get', async (req, res) => {
//   let test = await testController.get.get(req.params.id);
//   res.send(test);
// });
router.post('/upload', upload.single('tasks'), async function(req, res, next) {
  req.body.fileName = req.file.filename;
  req.body.originName = req.file.originalname;
  let model = await testController.create.loadToDbTest(req.body);
  if (!model) {
    res.send('error');
  }
  res.send(model);
});
router.post('/createtest', async (req, res) => {
  let test = await testCreateChekController.createLastTest.createLastTest(
    req.body.topic,
    req.body.name,
    req.body.login
  );
  res.send(test);
});

router.post('/getalltest', async (req, res) => {
  let masiv = [];
  let testId = await userController.get.getAllTest(req.body.login);
  for (let i = 0; i < testId.length; i++) {
    let parseTest = await readyTestController.get.getReadyTest(testId[i]);
    masiv.push(parseTest);
  }
  res.send(masiv);
});
const send = require('../../../helpers/mailSend');
router.post('/sendtest', async (req, res) => {
  let masivUsers = req.body.users;
  let testId = req.body.testId;
  let login = req.body.login;
  let adminId = await User.findOne({ login });
  let usersId = await send.sendTest(masivUsers, testId, adminId.id);
  result = {
    data: {
      testId: testId,
      userId: usersId
    }
  };
  res.send(result);
});
router.get('/gettest/:id', async (req, res) => {
  let test = await readyTestController.get.getReadyTest(req.params.id);
  let result = {
    status: 200,
    data: {
      test: test
    }
  };
  res.send(result);
});

router.post('/verifytest', async (req, res) => {
  let bal = await testCreateChekController.verifyTest.verifyTest(req.body.test, req.body.id, req.body.name);
  let complited = await userController.complitedTest.postComplited(req.body, bal);
  let result = {
    status: 200,
    data: { bal }
  };
  res.send(result);
});

// router.post('/edit', async (req, res) => {
//   let test = await testController.edit.edit(req.body);
//   res.send(test);
// });
module.exports = router;
