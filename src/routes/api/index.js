const express = require('express');

const admintestRouter = require('./admintest');
const userRouter = require('./user');
const usertestRouter = require('./usertest');

const router = express.Router();

router.use('/admintest', admintestRouter);
router.use('/user', userRouter);
router.use('/usertest', usertestRouter);

module.exports = router;
