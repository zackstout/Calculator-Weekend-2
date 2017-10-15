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
  $('.num, .op').on('click', pressBtn);
  $('#submit').on('click', calcReal);

  //pro mode buttons:
  $('.num2, .op2').on('click', pressBtn2);
  $('#submit2').on('click', calc3);
  $('#clear').on('click', clear2);
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
// add decimal point functionality
// update dom with history of calculations
// add parentheses functionality (seems hard)
