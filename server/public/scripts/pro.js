
var inputPro = '', proObj = {}, counter = 0;

//clear button:
function clearPro() {
  console.log($('#result3').text());
  $('#result3').text('');
  counter = 0;
  $('#nil').show();
}

//all other buttons:
function pressBtnPro() {
  console.log("button", $(this).text());
  inputPro += $(this).text();
  $('#result3').append($(this).text());
  $('#nil').hide();
}

//enter button:
function calcPro() {
  var obj = parserReal(inputPro);
  console.log("object", obj);
  $.ajax({
    method: 'POST',
    url: '/calculate3',
    data: obj
  })
  .done(function(response) {
    console.log(Number(response));
    $('#result3').text(response);
    inputPro = '';

    //append results to dom:
    if (counter === 0) {
      $('#history').append('<p>' + ' ' + obj.x + ' ' + obj.type + ' ' + obj.y + ' = ' + response + '</p>');
    } else {
      console.log(obj.x);
      $('#history').append('<p>' + obj.x + ' = ' + response + '</p>');
    }
    counter ++;
  })
  .fail(function(msg) {
    console.log('whoops', msg);
  });
}
