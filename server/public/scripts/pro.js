
var inputPro = '', proObj = {}, counter = 0, counter2 = 0, counter3 = 0, counter4 = 1;

//Clear button:
function clearPro() {
  // console.log($('#result3').text());
  $('#result3').text('0');
  counter = 0;
  counter2 = 0;
}

function isNumber(x) {
  var nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
  return nums.includes(x);
}

//Numeral and Operator buttons:
function pressBtnPro() {
  //make it so clicking a numeral after a computation is complete will start a new one:
  //   if (counter4 === 0) {
  // $('#result3').text('');
  // $('#result3').append($(this).text());
  //   }

  // console.log("button", $(this).text());
  if (counter3 === 0) {
    $('#result3').text('');
  }
  if (counter2 === 0 && counter3 > 0) {
    inputPro = '';
    $('#result3').text('');
    $('#result3').append($(this).text());
  } else {
    inputPro += $(this).text();
    $('#result3').append($(this).text());
  }
  counter2 += 1;
  console.log(counter2);
  counter3 += 1;
  counter4 += 1;
  // console.log(counter4);
}

//Specialty buttons:
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

//Enter button:
function calcPro() {
  var obj = parserReal(inputPro);

  //all we needed to get negatives live:
  var obj2 = parserReal($('#result3').text());
  // console.log("object1", obj);
  console.log("object2", obj2);
  $.ajax({
    method: 'POST',
    url: '/calculate3',
    // data: obj
    data: obj2
  })
  .done(function(response) {
    // console.log(Number(response));
    $('#result3').text(response);
    inputPro = '';

    console.log(obj.x, obj.type, obj.y, response);

    //append results to dom:
    //toggling this between counter and counter2 changes whether first or all others are messed up:
    if (counter === 0) {
      $('#history').append('<p class="hist">' + ' ' + obj.x + ' ' + obj.type + ' ' + obj.y + ' = ' + response + '</p>');
    } else {
      // console.log(obj.x);
      $('#history').append('<p class="hist">' + obj.x + ' = ' + response + '</p>');
    }
    counter ++;
    counter4 = 0;
  })
  .fail(function(msg) {
    console.log('whoops', msg);
  });
}
