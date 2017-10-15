function calculateIt(input) {
  var x = parseInt(input.x);
  var y = parseInt(input.y);
  console.log(input);

  var output = '';
  if (input.type === "+"){
    output = x + y;
  } else if (input.type === "-"){
    output = x - y;
  } else if (input.type === "x"){
    output = x * y;
  } else if (input.type === "/"){
    var divide = x / y;
    output = Math.round(divide*10000)/10000;
  }
  console.log(output);
  return output;
}

module.exports = calculateIt;
