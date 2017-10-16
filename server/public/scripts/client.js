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
  $('#submit2').on('click', calcPro);
  $('#switch').on('click', changeSign);
  $('#PI').on('click', addPi);
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


//
// FINAL COMMENTS:
// --Still a few bugs: can't get overflow to work; the decimal bug (sometimes a straightforward computation shows up with e.g. a trailing '.0000001'); also having trouble formatting the calculator, specifically getting space under the output box
// --A few things I wanted but didn't get to: add parentheses buttons and the requisite functionality, maybe even teach the calculator order of operations; make it so that if you click a number button after a computation is complete, it starts a new output string and shows 0, instead of appending to existing output string
// --I learned it will definitely pay in the future to map out my plan ahead of time so i don't have to waste time relearning the code i wrote at 2am last night and organizing it into something readable
