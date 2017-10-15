console.log('js');

$(document).ready(clickHandlers);

//Event listeners:
function clickHandlers() {
  console.log('jq');
  //base mode buttons:
  $('#add, #subtract, #multiply, #divide').on('click', calculate);
  $('#again').on('click', clear);

  //hard mode buttons:
  $('.num, .op').on('click', pressBtn);
  $('#submit').on('click', calc2);

  //pro mode buttons:
  $('.num2, .op2').on('click', pressBtn2);
  $('#submit2').on('click', calc3);
  $('#clear').on('click', clear2);
  $('.num2, .op2, #submit2, #clear').on('mousedown', changeBorder);
  $('.num2, .op2, #submit2, #clear').on('mouseup', changeBack);

  //navigation setup:
  $('#base, #hard, #pro').hide();
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

// TO DO:
// add functionality for negative numbers
// add screen, keep display as current number
// add decimal point functionality
// clean up division function
// update dom with history of calculations
// add parentheses functionality (seems hard)


//Pro mode functionality (CalcOut, Type, Parse, Post and Get)
var input3 = '', input4 = {};

function changeBorder() {
  $(this).css("box-shadow", "-4px -4px 1px darkSlateGray");
}

function changeBack() {
  $(this).css("box-shadow", "0px 0px");
}

function clear2() {
  $('#result3').text('');
}

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
  // there's nothing to log! parser1 returns zilch
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
    console.log(getResult666(x, y, type));
    var out = response;
    console.log ("out: ", out);
    $('#result3').text(out);
    input3 = '';
    // if ($('#result3').text().length !== 0) {
    //   input3 = $('#result3').text();
    // }
    // var resultingNum = getResult(input4.x, input4.y, input4.type);
    $('#history').append('<p>' + input4.x + input4.type +
     input4.y + "=" +
     getResult666(x, y, type) + '</p>');
  })
  .fail(function(msg) {
    console.log('whoops', msg);
  });
}
//
//
// function getResult3() {
//   $.ajax({
//     type: 'GET',
//     url: '/calculate3'
//   })
//   .done(function(response) {
//     var out = response;
//     console.log ("out: ", out);
//     $('#result3').text(out);
//     // fire = out;
//   })
//   .fail(function(msg) {
//     console.log(msg);
//   });
//
//   // return fire;
// }




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
    console.log('Success', response);
    var out = response;
    console.log ("out: ", out);
    $('#result2').text(out);
    input = '';
  })
  .fail(function(msg) {
    console.log('whoops', msg);
  });
}
//
// function getResult2() {
//   $.ajax({
//     type: 'GET',
//     url: '/calculate2'
//   })
//   .done(function(response) {
//     var out = response;
//     console.log ("out: ", out);
//     $('#result2').text(out);
//   })
//   .fail(function(msg) {
//     console.log(msg);
//   });
// }
//



//Base mode functionality (Post and Get):


function clear() {
  $('#first').val('');
  $('#second').val('');
  $('#result').text('');
  $('#first').focus();
}
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
