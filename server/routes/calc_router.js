
//dependencies:
var express = require('express');
var calculator = require('../modules/calculate.js');
var router = express.Router();

//Base mode route:
router.post('/', function(req, res) {
  res.send(String(calculator(req.body)));
});

//Hard mode route:
router.post('/hard', function(req, res) {
  res.send(String(calculator(req.body)));
});

//Pro mode route:
router.post('/pro', function(req, res) {
  console.log(req.body);
  res.send(String(calculator(req.body)));
});

module.exports = router;
