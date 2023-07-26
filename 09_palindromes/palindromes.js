const palindromes = function (words) {
    let replaced = words.replace(/[^a-z0-9]/gi, '').toLowerCase(); //removes non-alphanumeric characters
    let reversed = replaced.split("").reverse().join("");
    return (replaced === reversed ? true : false);
};

// Do not edit below this line
module.exports = palindromes;
