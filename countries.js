'use strict';

const router = require('express').Router();

router.get('/', getAll);
router.get('/:id', getById);

function getAll(req, res) {
  res.send({data: 'countries'});
}

function getById(req, res) {
  res.send({data: 'country:' + req.params.id});
}

module.exports = router;
