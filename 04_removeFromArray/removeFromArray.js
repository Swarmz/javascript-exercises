const removeFromArray = function(inputArray, ...manyMoreArgs) {
    const output = inputArray.filter((item) => !manyMoreArgs.includes(item));
    return output;
};

//TOP solution analysis:
//const removeFromArray = function (...args) {      // ...args takes all parameters and puts them into an array(even arrays) -> called rest parameters
//    const array = args[0];        // separating our initial array from the rest of the args into a new variable
//    const newArray = [];          // creating a new array for our filtered items
//    array.forEach((item) => {     // forEach will look at array any items(in this case all by using (item) param) and execute a function
//      if (!args.includes(item)) {     // check if remaining args(the ones we didn't separate earlier) include the same value as our forEach item inspection
//        newArray.push(item);      // push if no match
//      }
//    });
//    return newArray;
//  };
// Do not edit below this line
module.exports = removeFromArray;
