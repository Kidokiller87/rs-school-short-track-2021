/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let res = 0;
  const str1 = s1.split('').sort().join('');
  let str2 = s2.split('').sort().join('');

  for (let i = 0; i < str1.length; i++) {
    if (str2.includes(str1[i])) {
      str2 = str2.replace(str1[i], '');
      res += 1;
    }
  }
  return res;
}

module.exports = getCommonCharacterCount;
