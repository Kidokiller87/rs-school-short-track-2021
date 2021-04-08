/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  let count = 1;
  for (let i = 1; i < str.length + 1; i++) {
    if (str.length === 1) {
      return str[0];
    }
    if (str[i - 1] === str[i]) {
      count += 1;
    }
    if (str[i - 1] !== str[i]) {
      if (count > 1) {
        res += count;
        res += str[i - 1];
        count = 1;
      } else if (count === 1) {
        res += str[i - 1];
        count = 1;
      }
    }
  }
  return res;
}

module.exports = encodeLine;
