//Given an m x n matrix, return all elements of the matrix in spiral order.

var spiralOrder = function (matrix) {
  let r = matrix[0].length;
  let l = 0;
  let top = 0;
  let bottom = matrix.length;
  const result = [];

  while (l < r && top < bottom) {
    for (let i = l; i <= r - 1; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    for (let i = top; i < bottom; i++) {
      result.push(matrix[i][r - 1]);
    }

    r--;

    if (top >= bottom || l >= r) {
      break;
    }

    for (let i = r - 1; i >= l; i--) {
      result.push(matrix[bottom - 1][i]);
    }

    bottom--;

    for (let i = bottom; i > top; i--) {
      result.push(matrix[i - 1][l]);
    }

    l++;
  }

  return result;
};

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
);
