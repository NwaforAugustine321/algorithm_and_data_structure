// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

var orangesRotting = function (grid) {
  let time = 0;
  let queue = [];
  let freshOrange = 0;
  let row = grid.length;
  let col = grid[0].length;

  function preProcessMatrix() {
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        if (grid[i][j] == 1) {
          freshOrange += 1;
        }

        if (grid[i][j] == 2) {
          queue.push([i, j]);
        }
      }
    }
  }

  preProcessMatrix();
  console.log(freshOrange);

  while (queue.length > 0 && freshOrange > 0) {
    let len = queue.length;
    let dir = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ];

    for (let i = 0; i < len; i++) {
      let rottenOrange = queue.shift();
      for (let j = 0; j < dir.length; j++) {
        let c = dir[j][1] + rottenOrange[1];
        let r = dir[j][0] + rottenOrange[0];

        if (r < 0 || c < 0 || c == col || r == row || grid[r][c] != 1) {
          continue;
        }

        if (grid[r][c] == 1) {
          grid[r][c] = 2;
          queue.push([r, c]);
          freshOrange -= 1;
        }
      }
    }
    time++;
  }

  console.log(freshOrange, time);
  return freshOrange ? -1 : time;
};
