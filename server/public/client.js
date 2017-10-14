console.log('js');

$(document).ready(f1);

//Event listeners:
function f1() {
  console.log('jq');
  $('#add').on('click', calculate);
  $('#subtract').on('click', calculate);
  $('#multiply').on('click', calculate);
  $('#divide').on('click', calculate);
  $('.num').on('click', pressBtn);
  $('.op').on('click', pressBtn);
  $('#submit').on('click', calc2);
  $('#base').hide();
  $('#hard').hide();
  $('#togBase').on('click', function() {
    $('#base').toggle();
  });
  $('#togHard').on('click', function() {
    $('#hard').toggle();
  });

}

// to do:
// add functionality for negative numbers
// add screen, keep display as current number
// add decimal point functionality
// clean up division function
// update dom with history of calculations

//Hard mode functionality (Parse, Type, Post and Get):
var input = '', input2 = {};

function parser(str) {
  var nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var first = 0, second = 0, type = '';
  for (var i = 0; i < str.length; i ++) {
    if (!nums.includes(str.charAt(i))) {
      first = str.slice(0, i);
      second = str.slice(i + 1);
      type = str.charAt(i);
    }
  }
  input2.x = first;
  input2.y = second;
  input2.type = type;
}

function pressBtn() {
  console.log($(this).text());
  input += $(this).text();
}

function calc2() {
  console.log(input);
  parser(input);
  console.log(input2);
  var x = input2.x, y = input2.y, type = input2.type;
  $.ajax({
    method: 'POST',
    url: '/calculate2',
    data: {
      x: x,
      y: y,
      type: type
    }
  })
  .done(function(response) {
    console.log('success');
    getResult2();
    input = '';
  })
  .fail(function(msg) {
    console.log('whoops', msg);
  });
}

function getResult2() {
  $.ajax({
    type: 'GET',
    url: '/calculate2'
  })
  .done(function(response) {
    var out = response;
    console.log ("out: ", out);
    $('#result2').text(out);
  })
  .fail(function(msg) {
    console.log(msg);
  });
}


//Base mode functionality (Post and Get):
function calculate() {
  var x = $('#first').val();
  var y = $('#second').val();
  var type = $(this).data().type;
  console.log(type);

  $.ajax({
    method: 'POST',
    url: '/calculate',
    data: {
      x: x,
      y: y,
      type: type
    }
  })
  .done(function(response) {
    console.log('Success', response);
    getResult();
  })
  .fail(function(message){
    console.log(message);
  });
}

function getResult() {
  $.ajax({
    type: 'GET',
    url: '/calculate'
  })
  .done(function(response) {
    var out = response;
    console.log ("out: ", out);
    $('#result').text(out);

  }).fail(function(msg) {
    console.log(msg);
  });
}
