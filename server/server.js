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
  var input = req.body;
  var output = calculator(input);
  res.send(String(output));
});

//Hard mode route:
app.post('/calculate2', function(req, res) {
  var input = req.body;
  var output = calculator(input);
  res.send(String(output));
});

//Pro mode route:
app.post('/calculate3', function(req, res) {
  var input = req.body;
  var output = calculator(input);
  res.send(String(output));
});

//Listener
app.listen(port, function() {
  console.log('thx for listening on channel', port);
});
