const add = function(a,b) {
  let result = a+b;
  return result;
};

const subtract = function(a, b) {
  let result = a-b;
  return result;
};

const sum = function() {
	let result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  return parseInt(result);
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
