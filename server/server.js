var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 5050;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

var out = '', out2 = '';

//Original functionality:
app.post('/calculate', function(req, res) {
  var input = req.body;
  var x = parseInt(input.x);
  var y = parseInt(input.y);
  console.log(input);

  var output = '';
  if (input.type === "add"){
    output = x + y;
  } else if (input.type === "subtract"){
    output = x - y;
  } else if (input.type === "multiply"){
    output = x * y;
  } else if (input.type === "divide"){
    var divide = x / y;
    output = divide.toFixed(4);
  }
  console.log(output);
  res.sendStatus(201);
  out = output;
});

app.get('/calculate', function(req, res) {
  res.send(String(out));
});

//button stuff:

app.post('/calculate2', function(req, res) {
  var input = req.body;
  var x = parseInt(input.x);
  var y = parseInt(input.y);

  console.log(input);

  var output = '';
  if (input.type === "+"){
    output = x + y;
  } else if (input.type === "-"){
    output = x - y;
  } else if (input.type === "x"){
    output = x * y;
  } else if (input.type === "/"){
    var divide = x / y;
    output = divide.toFixed(4);
  }
  console.log(output);
  res.sendStatus(201);
  out2 = output;
});

app.get('/calculate2', function(req, res) {
  res.send(String(out2));
});

//done button stuff

app.listen(port, function() {
  console.log('thx for listening on channel', port);
});
