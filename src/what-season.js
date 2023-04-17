const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (date === undefined){
    return 'Unable to determine the time of year!';
  } else if (!(date instanceof Date)) {
    throw new Error('Invalid date!');;
  } else {
    let month = date.getMonth();

    if (month === 3 || month === 4 || month === 2){
      return 'spring';
    } else if (month === 6 || month === 7 || month === 5){
      return 'summer';
    } else if (month === 8 || month === 9 || month === 10) {
      return 'autumn';
    } else return 'winter';
  }
  
  // remove line with error and write your code here
}

module.exports = {
  getSeason
};
