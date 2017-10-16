
var inputHard = '', counter = 0;
var nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

//Parsing the input-string into an actionable computation:
function parserReal(str) {
  var out = {};
  var first = 0, second = 0, type = '';
  console.log(str.charAt(0));
  for (var i = 0; i < str.length; i ++) {
    if (!nums.includes(str.charAt(i))) {
      first = str.slice(0, i);
      second = str.slice(i + 1);
      type = str.charAt(i);
      //extra test for pro mode:
      if (first.length === 0) {
        first = beautify($('#result3').text());
      }
    }
  }
  out.x = first;
  out.y = second;
  out.type = type;
  return out;
}

function beautify(str) {
  //start at i=1 in order to properly format negative numbers in history
  var out = str.charAt(i);
  for (var i = 1; i < str.length; i++) {
    if (!nums.includes(str.charAt(i))) {
      out += ' ';
      out += str.charAt(i);
      out += ' ';
    } else {
      out += str.charAt(i);
    }
  }
  return out;
}

//Handling the functionality of non-enter buttons:
function pressBtnHard() {
  if (counter === 0) {
    $('#result2').text('');
  }
  inputHard += $(this).text();
  $('#result2').append($(this).text());
  counter += 1;
}

//Handling the enter button:
function calcHard() {
  console.log(inputHard);
  console.log(parserReal(inputHard));
  var obj = parserReal(inputHard);
  $.ajax({
    method: 'POST',
    url: '/calculate2',
    data: obj
  })
  .done(function(response) {
    $('#result2').text(response);
    inputHard = '';
    counter = 0;
  })
  .fail(function(msg) {
    console.log('whoops', msg);
  });
}
