'use strict';

const router = require('express').Router();

router.get('/', getAll);
router.get('/:id', getById);

function getAll(req, res) {
  res.send({data: 'users'});
}

function getById(req, res) {
  res.send({data: 'user:' + req.params.id});
}

module.exports = router;
