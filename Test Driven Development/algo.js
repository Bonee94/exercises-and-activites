function Algo() {}


Algo.prototype.reverse = string => {
    const array = string.split('');
    const reversedArray = array.reverse();
    const reversedString = reversedArray.join('');

    return reversedString;
};

Algo.prototype.isPalindrome = function (str) { };

Algo.prototype.capitalize = function (str) { };

const algo = new Algo();

const word = "hello world"




let check = algo.reverse(word);
console.log(check)
module.exports = Algo;