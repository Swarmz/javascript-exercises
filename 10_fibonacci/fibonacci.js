
const fibonacci = function(fibNum) {
    Number(fibNum);
    let myArr = new Array(2).fill(1);
    if (fibNum > 0) {
        for (let i=1; i<fibNum; i++){
                let nextNum = 0;
                nextNum = myArr[i]+myArr[i-1];
                myArr.push(nextNum);
            }
        return myArr[fibNum-1];
    }
    else {
        return "OOPS";
    }   
};

// Do not edit below this line
module.exports = fibonacci;


