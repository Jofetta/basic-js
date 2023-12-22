const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  length: 0,
  array: [],
  getLength() {
    return this.length;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    if (value === undefined) {
      this.array.push(`(  )`);
    } else {
      this.array.push(`( ${value} )`);
    }
    this.length++;
    return this;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(position) {
    if (!Number.isInteger(position) || Number.isNaN(position) || this.array.length - 1 < position || position <= 0) {
      this.length = 0;
      this.array = [];
      throw new Error("You can't remove incorrect link!");
    } else {
      this.array.splice(position - 1, 1);
      this.length--;
      return this;
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    this.array.reverse();
    return this;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    let chain = this.array.join('~~');
    this.array = [];
    this.length = 0;
    return chain;
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
