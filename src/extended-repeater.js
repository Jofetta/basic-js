const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let strString = String(str);
  
let additionString = '';
let finalStr = '';
let resultArr = [];
let result = '';

if (options){
    if (options.addition !== undefined){
      let additionTOString = String(options.addition);
      let additionArr = []
        if (options.additionRepeatTimes){
          for (let i = 0; i < options.additionRepeatTimes; i++){
            additionArr.push(additionTOString);
          } 
          if (options.additionSeparator){
            additionString = additionArr.join(options.additionSeparator.toString());
          } else additionString = additionArr.join('|');
        } else additionString = additionTOString;
       
    } 
    finalStr = strString + additionString;

    if (options.repeatTimes){
      for (let j = 0; j < options.repeatTimes; j++){
         resultArr.push(finalStr);
      }
        if (options.separator){
          result = resultArr.join(options.separator.toString());
        } else result = resultArr.join('+');
    } else result = finalStr;


}

return result;
}

module.exports = {
  repeater
};
