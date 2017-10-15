
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

function addPi() {
  inputPro += (Math.PI).toFixed(8);
  $('#result3').append((Math.PI).toFixed(8));
  // $('#result3').append('<span>&PI;</span>');
  $('#nil').hide();
}

function changeSign() {
  if ($('#result3').text().charAt(0) === '-') {
    $('#result3').text($('#result3').text().slice(1));
  } else {
    var add = '-' + $('#result3').text();
    $('#result3').text(add);
  }
}

//enter button:
function calcPro() {
  var obj = parserReal(inputPro);
  //all we needed to get negatives live:
  var obj2 = parserReal($('#result3').text());
  console.log("object1", obj);
  console.log("object2", obj2);
  $.ajax({
    method: 'POST',
    url: '/calculate3',
    // data: obj
    data: obj2
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
