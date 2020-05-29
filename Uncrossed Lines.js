
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var maxUncrossedLines = function(A, B) {
  let array = new Array(A.length + 1);
  for (let i = 0; i <= A.length; i++)
    array[i] = new Array(B.length + 1).fill(0);
  for (let i = 1; i <= A.length; i++) {
    for (let j = 1; j <= B.length; j++) {
      if (A[i - 1] === B[j - 1]) {
        array[i][j] = 1 + array[i - 1][j - 1];
      } else {
        array[i][j] = Math.max(array[i][j - 1], array[i - 1][j]);
      }
    }
  }
  return array[A.length][B.length];
};
