const sumAll = function(A, B) {
    let sum = 0;
    console.log(typeof A);
    if ((typeof A !== "number" || typeof B !== "number") || (B <= 0 || A <= 0)) {
        return "ERROR";
    } else if (B < A) {
        for (let i = B; i <= A; i++) {
            sum += i;
        } 
        return sum;
    } else {
        for (let i = A; i <= B; i++) {
            sum += i;
        }
        return sum;
    }
};


// TOP solution analysis:
// const sumAll = function(min, max) {
//    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";     //Number.isInteger() checks the bracketed value if an int or not
//  if (min < 0 || max < 0) return "ERROR";     
//    if (min > max) {      // if the first arg is the greater number, we create a new variable to pass the values in a circle so min is the higher num and max the lower -- no need for two for loops now
//      const temp = min;
//      min = max;
//      max = temp;
//    }
//    let sum = 0;
//    for (let i = min; i < max + 1; i++) {
//      sum += i;
//    }
//    return sum;
//  };
  

// Do not edit below this line
module.exports = sumAll;
