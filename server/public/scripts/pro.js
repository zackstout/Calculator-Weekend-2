
var inputPro = '', proObj = {}, counter = 0;

function clearPro() {
  console.log($('#result3').text());
  $('#result3').text('');
  counter = 0;
}

function pressBtnPro() {
  console.log("button", $(this).text());
  inputPro += $(this).text();
  $('#result3').append($(this).text());
}

function calcPro() {
  var obj = parserReal(inputPro);
  var x = obj.x, y = obj.y, type = obj.type;
  console.log("object", obj);
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
    console.log(Number(response));
    $('#result3').text(response);
    inputPro = '';
    if (counter === 0) {
      $('#history').append('<p>' + obj.x + obj.type +
    obj.y + '=' + response + '</p>');
  } else {
    $('#history').append('<p>' + obj.x + '=' + response + '</p>');
  }
    counter ++;
  })
  .fail(function(msg) {
    console.log('whoops', msg);
  });
}
