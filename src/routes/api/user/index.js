const express = require('express');

const userController = require('../../../controller').userController;

const router = express.Router();

router.get('/get', async (req, res) => {
  let userModel = await userController.get(req.params.id);
  res.send(userModel);
});

router.post('/regist', async (req, res) => {
  let user = await userController.registr.registr(req.body);
  res.send(user);
});

router.post('/login', async (req, res) => {
  let user = await userController.login.login(req.body);
  res.send(user);
});
router.post('/edit', async (req, res) => {
  let user = await userController.edit.edit(req.body);
  res.send(user);
});
module.exports = router;
