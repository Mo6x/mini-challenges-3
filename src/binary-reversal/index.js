/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
function binaryReversal(value){
 let number = parseInt(value);
 let binary = number.toString(2);

 let paddedNumber = binary.padStart(8,0)
 let reverseNumber = paddedNumber.split('').reverse().join('');
 let result = parseInt(reverseNumber,2);
 return result
// let binaryValue = Number(value).toString(2);
//   let paddedValue = binaryValue.padStart(8, '0');
//   let reversedStr = paddedValue.split('').reverse().join('');
//   return (parseInt(reversedStr, 2)).toString();

}

module.exports = binaryReversal;
