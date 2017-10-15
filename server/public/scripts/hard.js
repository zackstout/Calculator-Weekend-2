
var inputHard = '';

function parserReal(str) {
  var out = {};
  var nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var first = 0, second = 0, type = '';
  for (var i = 0; i < str.length; i ++) {
    if (!nums.includes(str.charAt(i))) {
      first = str.slice(0, i);
      //extra test for pro mode:
      if (first.length === 0) {
        first = $('#result3').text();
      }
      second = str.slice(i + 1);
      type = str.charAt(i);
    }
  }
  out.x = first;
  out.y = second;
  out.type = type;
  return out;
}

function pressBtnHard() {
  console.log($(this).text());
  inputHard += $(this).text();
}

function calcHard() {
  console.log(inputHard);
  console.log(parserReal(inputHard));
  var obj = parserReal(inputHard);
  var x = obj.x, y = obj.y, type = obj.type;
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
    $('#result2').text(response);
    inputHard = '';
  })
  .fail(function(msg) {
    console.log('whoops', msg);
  });
}
