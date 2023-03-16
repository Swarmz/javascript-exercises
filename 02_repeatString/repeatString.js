const repeatString = function(string, num) {
    let stringOutput = ''; 
    if (num >= 0) { // Give error unless pos int is given
        for (i = 0; i < num; i++) {
            stringOutput += string;
        }
        return stringOutput;
    } else {
    return "ERROR";
    }
}
// solution analysis: only need a 1 line 'if' statement to check for pos ints -> (if (times < 0) return 'ERROR';), 'else' unneeded


// Do not edit below this line
module.exports = repeatString;
