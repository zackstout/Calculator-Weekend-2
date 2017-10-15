
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
    var out = response;
    console.log ("out: ", out);
    $('#result').text(out);
  })
  .fail(function(message){
    console.log(message);
  });
}
