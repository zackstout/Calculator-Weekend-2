//dependencies:
var express = require('express');
var bodyParser = require('body-parser');

//set up server:
var app = express();
var port = 5050;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

//Base mode routes (Post and Get):
// var out = '';

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
  // out = output;

  res.send(String(output));
  //
  // res.sendStatus(201);
});
//
// app.get('/calculate', function(req, res) {
//   res.send(String(out));
// });


//Hard mode routes (Post and Get)
var out2 = '';

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


//Pro mode routes:
var out3 = '';

app.post('/calculate3', function(req, res) {
  var input = req.body;
  var x = parseInt(input.x);
  var y = parseInt(input.y);

  console.log("thx", input);

  var output2 = '';
  if (input.type === "+"){
    output2 = x + y;
  } else if (input.type === "-"){
    output2 = x - y;
  } else if (input.type === "x"){
    output2 = x * y;
  } else if (input.type === "/"){
    var divide = x / y;
    output2 = divide.toFixed(4);
  }
  console.log(output2);
  res.sendStatus(201);
  out3 = output2;
});

app.get('/calculate3', function(req, res) {
  res.send(String(out3));
});


//Listener
app.listen(port, function() {
  console.log('thx for listening on channel', port);
});
