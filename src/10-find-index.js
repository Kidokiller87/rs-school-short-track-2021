/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let left = -1;
  let rigth = array.length;
  while (rigth - left > 1) {
    const middle = Math.floor((left + rigth) / 2);
    if (array[middle] === value) {
      return middle;
    }
    if (array[middle] > value) {
      rigth = middle;
    } else {
      left = middle;
    }
  }
  return -1;
}

module.exports = findIndex;
