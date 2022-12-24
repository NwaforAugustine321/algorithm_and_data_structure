var inorderTraversal = function (root) {
  let result = [];

  function dfs(cur) {
    if (cur == null) {
      return;
    }

    dfs(cur.left);
    result.push(cur.val);
    dfs(cur.right);
  }

  dfs(root);
  return result;
};

console.log(inorderTraversal());
