// Apporach 1: Runtime: 88ms; Approach: Dynamic programming.
/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
  let numberOfSquares = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        continue;
      } else {
            if(j > 0 && i > 0) {
               matrix[i][j] += Math.min(matrix[i-1][j], matrix[i-1][j-1], matrix[i][j-1]);
            }
          numberOfSquares += matrix[i][j];
        }
    }
  }
  return numberOfSquares;
};


// Approach 2: Runtime: 120ms; Approach: Brute force
var confirmSquare = function(matrix, iIndex, jIndex, side) {
  let notSquare = false;
  for (let i = iIndex; i < iIndex + side; i++) {
    for (let j = jIndex; j < jIndex + side; j++) {
      if (matrix[i][j] === 1) {
        continue;
      } else {
        notSquare = true;
        break;
      }
    }
    if (notSquare) {
      break;
    }
  }
  return !notSquare;
}
var isSquare = function(matrix, iIndex, jIndex) {
    let side = 1,
      numberOfSquares = 0;
    for (let i = iIndex; i < matrix.length; i++) {
      if (confirmSquare(matrix, iIndex, jIndex, side)) {
        side++;
        numberOfSquares++;
      } else {
        break;
      }
    }
    return numberOfSquares;
  }
  /**
   * @param {number[][]} matrix
   * @return {number}
   */
var countSquares = function(matrix) {
  let numberOfSquares = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        numberOfSquares += isSquare(matrix, i, j);
      }
    }
  }
  return numberOfSquares;
};
