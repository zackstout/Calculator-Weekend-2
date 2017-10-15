console.log('js');

$(document).ready(clickHandlers);

//Event listeners:
function clickHandlers() {
  console.log('jq');

  //navigation setup:
  $('#base, #hard, #pro').hide();
  $('#togBase').on('click', function() {
    $('#base').toggle();
  });
  $('#togHard').on('click', function() {
    $('#hard').toggle();
  });
  $('#togPro').on('click', function() {
    $('#pro').toggle();
  });

  //base mode buttons:
  $('#add, #subtract, #multiply, #divide').on('click', calculate);
  $('#again').on('click', clear);

  //hard mode buttons:
  $('.num, .op').on('click', pressBtnHard);
  $('#submit').on('click', calcHard);

  //pro mode buttons:
  $('.num2, .op2').on('click', pressBtnPro);
  $('#switch').on('click', changeSign);
  $('#PI').on('click', addPi);
  $('#submit2').on('click', calcPro);
  $('#clear').on('click', clearPro);
  $('.num2, .op2, #submit2, #clear').on('mousedown', changeBorder);
  $('.num2, .op2, #submit2, #clear').on('mouseup', changeBack);
}

//Button styling:
function changeBorder() {
  $(this).css("box-shadow", "-2px -2px 1px darkSlateGray");
}
function changeBack() {
  $(this).css("box-shadow", "0px 0px");
}

// TO DO:
// add parentheses functionality (seems hard and maybe not worth it??????)
// fix overflow
// save each calculation in array on server
// also the decimal bug
// also make it know the order of ops (????)
// make it so that if you click a number button after
//a computation is complete, you start a new string,
//and so that it shows 0 but doesnt affect the string
