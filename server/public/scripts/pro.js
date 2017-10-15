
var inputPro = '';

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
  inputPro += $(this).text();
  $('#result3').append($(this).text());
}

function calc3() {
  parserReal(inputPro);
  var obj = parserReal(inputPro);
  var x = obj.x, y = obj.y, type = obj.type;
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
    console.log(getResult666(x, y, type));
    $('#result3').text(response);
    inputPro = '';
    // $('#history').append('<p>' + input4.x + input4.type +
    //  input4.y + "=" +
    //  getResult666(x, y, type) + '</p>');
  })
  .fail(function(msg) {
    console.log('whoops', msg);
  });
}
