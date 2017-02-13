'use strict';

const router = require('express').Router();
const users = require('./user');

router.params('/', getAll);

function getAll(req, res) {
  console.log(users.get('/'));
  // res.send(users)
}


module.exports = router;
