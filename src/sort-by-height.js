const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
 let unsortedArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      unsortedArr.push(arr[i]);
    }
  }
  let sortedArr = unsortedArr.sort((a, b) => a -b);
  count = 0;
  let finalArr = [];
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === -1) {
      finalArr.push(arr[j]);
      count++;
    } else {
      finalArr.push(sortedArr[j - count]);
    }
  }
  return finalArr;
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  sortByHeight
};
