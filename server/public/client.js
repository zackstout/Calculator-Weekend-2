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
  $('.num2').on('click', pressBtn2);
  $('.op2').on('click', pressBtn2);
  $('#submit').on('click', calc2);
  $('#submit2').on('click', calc3);
  organizer();

}

function organizer() {
  $('#base').hide();
  $('#hard').hide();
  $('#pro').hide();
  $('#togBase').on('click', function() {
    $('#base').toggle();
  });
  $('#togHard').on('click', function() {
    $('#hard').toggle();
  });
  $('#togPro').on('click', function() {
    $('#pro').toggle();
  });
}

//console.log count: 14

// TO DO:
// add functionality for negative numbers
// add screen, keep display as current number
// add decimal point functionality
// clean up division function
// update dom with history of calculations


//Pro mode functionality (CalcOut, Type, Parse, Post and Get)
var input3 = '', input4 = {};
//
// the weird way i tried to do it at first involved this var "fire"
// var fire = '';


function getResult666(x, y, type) {
  var res = '';
  if (type == "/") {
    res = x/y;
  } else if (type == "x") {
    res = x*y;
  } else if (type == "+") {
    res = parseInt(x) + parseInt(y);
  } else if (type == "-") {
    res = x - y;
  }
  return res;
}

function pressBtn2() {
  console.log($(this).text());
  input3 += $(this).text();
  $('#result3').append($(this).text());

}


//ok so the basic function works except it's messing
//up the appending function somehow
function parser1(str) {
  var nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var first = 0, second = 0, type = '';
  for (var i = 0; i < str.length; i ++) {
    if (!nums.includes(str.charAt(i))) {
      first = str.slice(0, i);
      if (first.length === 0) {
        first = $('#result3').text();
      }
      second = str.slice(i + 1);
      type = str.charAt(i);
    }
  }
  input4.x = first;
  input4.y = second;
  input4.type = type;
}

function calc3() {
  console.log(input3);
  parser1(input3);
  // console.log(parser1(input3));
  // there's nothing to log! it returns zilch
  console.log(input4);
  var x = input4.x, y = input4.y, type = input4.type;
  $.ajax({
    method: 'POST',
    url: '/calculate3',
    data: {
      x: x,
      y: y,
      type: type
    }
  })
  .done(function(response) {
    console.log('success');
    getResult3();
    console.log(getResult666(x, y, type));
    input3 = '';
    // var resultingNum = getResult(input4.x, input4.y, input4.type);
    $('#history').append('<p>' + input4.x + input4.type +
     input4.y + "=" +
     getResult666(x, y, type) + '</p>');
  })
  .fail(function(msg) {
    console.log('whoops', msg);
  });
}


function getResult3() {
  $.ajax({
    type: 'GET',
    url: '/calculate3'
  })
  .done(function(response) {
    var out = response;
    console.log ("out: ", out);
    $('#result3').text(out);
    // fire = out;
  })
  .fail(function(msg) {
    console.log(msg);
  });

  // return fire;
}




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
  var type = $(this).data().poop;
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
    var out = response;
    console.log ("out: ", out);
    $('#result').text(out);
  })
  .fail(function(message){
    console.log(message);
  });
}
//
// function getResult() {
//   $.ajax({
//     type: 'GET',
//     url: '/calculate'
//   })
//   .done(function(response) {
//     var out = response;
//     console.log ("out: ", out);
//     $('#result').text(out);
//
//   }).fail(function(msg) {
//     console.log(msg);
//   });
// }
