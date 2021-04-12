/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function countMines(i, k, matrix) {
  let count = 0;
  let error = 0;
  try {
    if (matrix[i - 1][k - 1]) {
      count++;
    }
  } catch (e) {
    error++;
  }
  try {
    if (matrix[i - 1][k]) {
      count++;
    }
  } catch (e) {
    error++;
  }
  try {
    if (matrix[i - 1][k + 1]) {
      count++;
    }
  } catch (e) {
    error++;
  }
  try {
    if (matrix[i][k + 1]) {
      count++;
    }
  } catch (e) {
    error++;
  }
  try {
    if (matrix[i + 1][k + 1]) {
      count++;
    }
  } catch (e) {
    error++;
  }
  try {
    if (matrix[i + 1][k]) {
      count++;
    }
  } catch (e) {
    error++;
  }
  try {
    if (matrix[i + 1][k - 1]) {
      count++;
    }
  } catch (e) {
    error++;
  }
  try {
    if (matrix[i][k - 1]) {
      count++;
    }
  } catch (e) {
    error++;
  }
  if (error) {
    error++;
  }
  return count;
}

function minesweeper(matrix) {
  const res = [];
  for (let i = 0; i < matrix.length; i++) {
    res.push([]);
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let k = 0; k < matrix[i].length; k++) {
      res[i][k] = countMines(i, k, matrix);
    }
  }
  return res;
}

module.exports = minesweeper;
