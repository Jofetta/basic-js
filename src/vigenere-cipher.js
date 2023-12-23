const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

class VigenereCipheringMachine {
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    let encryptedMessage = '';
    let count = 0;
    for (let i = 0; i < message.length; i++) {
      if (!alphabet.includes(message[i].toUpperCase())) {
        encryptedMessage += message[i];
        count++;
      } else {
        let letterIndex = alphabet.indexOf(message[i].toUpperCase());
        let keyLength = i - count;
        let keyIndex;
        while (keyLength >= key.length) {
          keyLength = keyLength - key.length
        }
        keyIndex = alphabet.indexOf(key[keyLength].toUpperCase());
        let index = letterIndex + keyIndex;
        if (index >= 26) {
          index = index - 26;
        }
        encryptedMessage += alphabet[index];
      }
    }
    return encryptedMessage;
  }
  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }
    let decryptedMessage = '';
    let count = 0;
  for (let i = 0; i < message.length; i++) {
      if (!alphabet.includes(message[i].toUpperCase())) {
        decryptedMessage += message[i];
        count++;
      } else {
        let letterIndex = alphabet.indexOf(message[i]);
        let keyIndex = i - count;
        while (keyIndex >= key.length) {
          keyIndex = keyIndex - key.length;
        }
        let keyNum = alphabet.indexOf(key[keyIndex].toUpperCase());
        let finalIndex = letterIndex - keyNum;
        if (finalIndex < 0) {
          finalIndex = 26 + finalIndex;
        }
        decryptedMessage += alphabet[finalIndex];
      }
  }
    return decryptedMessage;
  }
}
module.exports = {
  VigenereCipheringMachine
};
