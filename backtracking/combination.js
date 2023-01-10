// Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

// You may return the answer in any order.

// Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.

var combine = function (n, k) {
  let res = [];

  function dfs(i, com) {
    if (com.length == k) {
      res.push([...com]);
      return;
    }

    for (let j = i; j < n + 1; j++) {
      com.push(j);
      dfs(j + 1, com);
      com.pop();
    }
  }

  dfs(1, []);
  return res;
};
