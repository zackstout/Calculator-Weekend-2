
function calculateIt(input) {
  var x = parseForDec(input.x);
  var y = parseForDec(input.y);
  // parseSign(x);
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
  output = Math.round(output*1000000000000)/1000000000000;
  console.log(output);
  return output;
}

function parseForDec(num) {
  if (num.includes('.')) {
    var first = parseInt(num.slice(0, num.indexOf('.')));
    var last = parseInt(num.slice(num.indexOf('.') + 1));
    var power = (String(last).length * (-1));
    var out = first + Math.pow(10, power)*last;

    //trying to get negative decimals live:
    if (num.includes('-')) {
      out = first - Math.pow(10, power)*last;
    }
    console.log(first, last, power, out);
    return out;
  } else {
    return parseInt(num);
  }
}

function parseSign(num) {
  console.log("char at 1", String(num).charAt(1));
  var out = '';
  if (String(num).charAt(1) === '-') {

    out = String(num).slice(2);
    console.log(out);
    console.log(parseInt(out));
  }
  return out;
  //adding negative number capability:
  // if (num.charAt(0) === '-') {
  //   var first = parseInt(num.slice(1, num.indexOf('.')));
  // }
  // //adding negative number capability:
  // if (num.charAt(0) === '-') {
  //   var out = 0 - out;
}
// function parseForParen(num) {
//   var interior = '';
//   if (num.includes('(')) {
//     interior = num.slice(num.indexOf('(') + 1, num.indexOf(')'));
//     console.log(interior);
//   }
// }

module.exports = calculateIt;
