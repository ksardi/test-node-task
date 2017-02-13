"use strict";
const express = require('express');
const app = express();
const request = require('request');

// Simple mock for api
const users = require('./user');
const customers = require('./customers');
const countries = require('./countries');

app.use('/api/users', users);
app.use('/api/customers', customers);
app.use('/api/countries', countries);


app.get('/api/resources', function(req, res) {
  let data = {};
  let params = req.query;
  let fullUrl = `${req.protocol}://${req.headers.host}/`;
  let promises = [];

  for (let key in params) {
    promises.push(
      new Promise(function(resolve, reject){
        request.get(fullUrl + params[key], function(err, res, body) {
          // we can add some err handler if needed
          if (res.statusCode == 200) data[key] = JSON.parse(body);
          resolve();
        });
      })
    )
  }

  Promise.all(promises).then(function() {
    res.send(data);
  });

});


app.listen(3000, function() {
  console.log('app mounted on port 3000');
});

module.exports = app;
