console.log('js');

$(document).ready(f1);

function f1() {
  console.log('jq');
  $('#add').on('click', calculate);
  $('#subtract').on('click', calculate);
  $('#multiply').on('click', calculate);
  $('#divide').on('click', calculate);

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
    getResult();
  })
  .fail(function(message){
    console.log(message);
  });
}

function getResult() {
  $.ajax({
    type: 'GET',
    url: '/calculate'
  })
  .done(function(response) {
    var out = response;
    console.log ("out: ", out);
    $('#result').text(out);

  }).fail(function(msg) {
    console.log(msg);
  });
}
