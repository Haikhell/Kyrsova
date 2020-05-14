const express = require('express');

const userController = require('../../../controller').userController;

const router = express.Router();

router.get('/get', async (req, res) => {
  let userModel = await userController.get.getUserById(req.params.login);
  res.send(userModel);
});

router.post('/registr', async (req, res) => {
  let user = await userController.registr.registUser(req.body);
  res.send(user);
});
router.post('/searchcategory', async (req, res) => {
  let test = await userController.search.searchByCategory(req.body);
});
router.post('/getcategory', async (req, res) => {
  console.log(req.body);
  let test = await userController.get.getCategory(req.body.login);
  res.send(test);
});

router.post('/login', async (req, res) => {
  let user = await userController.login.loginUser(req.body);
  res.send(user);
});
router.post('/edit', async (req, res) => {
  let user = await userController.edit.editUser(req.body);
  res.send(user);
});

module.exports = router;
