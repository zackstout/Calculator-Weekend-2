
//dependencies:
var express = require('express');
var bodyParser = require('body-parser');
// var calculator = require('./modules/calculate.js');
var calcRouter = require('./routes/calc_router.js');

//set up server:
var app = express();
var port = process.env.PORT || 5050;
var output = [];

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/calculate', calcRouter);

//Listener
app.listen(port, function() {
  console.log('thx for listening on channel', port);
});
