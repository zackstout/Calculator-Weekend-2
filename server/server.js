var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = 5050;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));

var out = '';

app.post('/calculate', function(req, res) {
  var input = req.body;
  console.log(input);

  var output = '';
  if (input.type === "add"){
    output = input.x + input.y;
  } else if (input.type === "subtract"){
    output = input.x - input.y;
  } else if (input.type === "multiply"){
    output = input.x * input.y;
  } else if (input.type === "divide"){
    output = input.x / input.y;
  }
  console.log(output);
  res.sendStatus(201);
  out = output;
});

app.get('/calculate', function(req, res) {
  res.send(String(out));
});

app.listen(port, function() {
  console.log('thx for listening on channel', port);
});
