
var computations = [];

function calculateIt(input) {
  var x = parseForDec(input.x);
  var y = parseForDec(input.y);
  // console.log(input);
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
  output = Math.round(output*1000000000000)/1000000000000;
  console.log(output);
  
  //saving data on server:
  var out = '';
  out = x + ' ' + input.type + ' ' + y + ' = ' + output;
  computations.push(out);
  console.log(computations);

  return output;
}

function parseForDec(num) {
  if (num.includes('.')) {
    var first = parseInt(num.slice(0, num.indexOf('.')));
    var last = parseInt(num.slice(num.indexOf('.') + 1));
    var power = (String(last).length * (-1));
    var out = first + Math.pow(10, power)*last;

    //trying to get negative decimals live (seems to work):
    if (num.includes('-')) {
      out = first - Math.pow(10, power)*last;
    }
    console.log(first, last, power, out);
    return out;
  } else {
    return parseInt(num);
  }
}

module.exports = calculateIt;
