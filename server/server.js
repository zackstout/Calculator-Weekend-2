//dependencies:
var express = require('express');
var bodyParser = require('body-parser');
var calculator = require('./modules/calculate.js');

//set up server:
var app = express();
var port = 5050;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

//Base mode route:
app.post('/calculate', function(req, res) {
  res.send(String(calculator(req.body)));
});

//Hard mode route:
app.post('/calculate2', function(req, res) {
  res.send(String(calculator(req.body)));
});

//Pro mode route:
app.post('/calculate3', function(req, res) {
  console.log(req.body);
  res.send(String(calculator(req.body)));
});

//Listener
app.listen(port, function() {
  console.log('thx for listening on channel', port);
});
