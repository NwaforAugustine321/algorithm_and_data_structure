//Given an m x n grid of characters board and a string word, return true if word exists in the grid.

//The word can be constructed from letters of sequentially adjacent cells,
// where adjacent cells are horizontally or vertically neighboring.
//The same letter cell may not be used more than once.

var exist = function (board, word) {
  let path = new Set();

  function search(r, c, i, res = null) {
    if (i == word.length) {
      return true;
    }

    if (
      r < 0 ||
      c < 0 ||
      c >= board[0].length ||
      r >= board.length ||
      path.has(`${r}${c}`) ||
      word[i] != board[r][c]
    ) {
      return false;
    }

    path.add(`${r}${c}`);

    res =
      search(r + 1, c, i + 1, res) ||
      search(r - 1, c, i + 1, res) ||
      search(r, c + 1, i + 1, res) ||
      search(r, c - 1, i + 1, res);

    path.delete(`${r}${c}`);

    return res;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (search(i, j, 0)) return true;
    }
  }

  return false;
};

exist(
  [
    ['A', 'B', 'C', 'E'],
    ['S', 'F', 'C', 'S'],
    ['A', 'D', 'E', 'E'],
  ],
  'ABCCED'
);
