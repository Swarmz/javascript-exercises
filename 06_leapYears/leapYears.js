const leapYears = function(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0 && year % 400 == 0) {
            return true;
        }
        if (year % 100 == 0 && year % 400 !== 0) {
            return false;
        }  
        return true;
    } else {
        return false;
    }
};

//  TOP Solution Analysis:

//  const leapYears = function(year) {
//  return year % 4 === 0 && ( year % 100 !== 0 || year % 400 === 0);   // auto returns true or false because of boolean operators
//    };                                                                // for any value not divisible by 100 the bracketed section will return a true value satisfying the &&
                                                                        // 
// Do not edit below this line
module.exports = leapYears;
