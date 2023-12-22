const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numbersArray = [];
  const str = n.toString();
  
  for (let i = 0; i < str.length; i++) {
    let number = str.replace(`${str[i]}`, '');
    numbersArray.push(+number);
  }
  
  let result = 0;
  
  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] > result) {
      result = numbersArray[i];
    }
  }
  
  return result;
}

module.exports = {
  deleteDigit
};
