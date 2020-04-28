const express = require('express');

const testCreateChekController = require('../../../controller').testCreateChekController;
const readFile = require('../../../helpers/readFile');

const router = express.Router();

router.post('/create', async (req, res) => {
  const body = await readFile.csvRead(req.body.name);
  let testModel = await testCreateChekController.create.create(body);
});
module.exports = router;
