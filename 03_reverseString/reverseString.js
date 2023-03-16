const reverseString = function(string) {
    let splitArray = string.split('');
    let reversalArray = splitArray.reverse();
    let joinArray = reversalArray.join('');
    return joinArray;
};

// solution analysis: use multiple functions at once with period separator -> array.split().reverse().join();

// Do not edit below this line
module.exports = reverseString;
