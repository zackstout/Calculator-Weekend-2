
var inputHard = '';
var nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];

//Parsing the input-string into an actionable computation:
function parserReal(str) {
  var out = {};
  var first = 0, second = 0, type = '';
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
  var out = '';
  for (var i = 0; i < str.length; i++) {
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

//Handling the functionality of submit button:
function pressBtnHard() {
  console.log($(this).text());
  inputHard += $(this).text();
}

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
  })
  .fail(function(msg) {
    console.log('whoops', msg);
  });
}
