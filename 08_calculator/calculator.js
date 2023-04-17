const add = function(a,b) {
  let result = a+b;
  return result;
};

const subtract = function(a,b) {
  let result = a-b;
  return result;
};

const sum = function(args) {
  let result = 0;
  for (let i = 0; i < args.length; i++) {
    result += args[i];
  }
  return parseInt(result);
};

const multiply = function(args) {
  let result = 1;
  for (let i = 0; i < args.length; i++) {
    result *= args[i];
  }
  return parseInt(result);
};

const power = function(a,b) {
	let num = a;
  let power = b;
  let result = num ** power;
  return result;
};

const factorial = function(a) {
	let num = a;
  let result = 1;
  for (let i = 0; i < num; i++) {
    result *= num-i;
  }
  return result;
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
