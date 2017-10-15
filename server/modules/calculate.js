function calculateIt(input) {
  var x = parseForDec(input.x);
  var y = parseForDec(input.y);
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
    output = Math.round(divide*100000)/100000;
  }
  console.log(output);
  return output;
}

module.exports = calculateIt;

function parseForDec(num) {
  if (num.includes('.')) {
    var first = num.slice(0, num.indexOf('.'));
    var last = num.slice(num.indexOf('.') + 1);
    var power = (last.length * (-1));
    var out = parseInt(first) + Math.pow(10, power);
    return out;
  } else {
    return parseInt(num);
  }
}
