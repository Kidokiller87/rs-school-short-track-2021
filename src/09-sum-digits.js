/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let array = n.toString().split('');
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    if (array.length === 1) {
      return Number(array[0]);
    }
    if (array.length === 2 && (Number(array[0]) + Number(array[1])) <= 9) {
      return Number(array[0]) + Number(array[1]);
    }
    result += Number(array[i]);
    if (i === array.length - 1 && result >= 10) {
      i = 0;
      array = result.toString().split('');
      result = 0;
    } else if (i === array.length - 1 && result < 10) {
      return result;
    }
  }
  return result;
}

module.exports = getSumOfDigits;
