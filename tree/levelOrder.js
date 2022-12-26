// Given the root of a binary tree, return the level order traversal of its
// nodes' values. (i.e., from left to right, level by level).

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 */
var levelOrder = function (root) {
  let res = [];
  let q = [root];

  function dfs() {
    while (q.length > 0 && root != null) {
      let level = [];
      let len = q.length;
      for (let i = 0; i < len; i++) {
        let node = q.shift();

        if (node) {
          level.push(node.val);
          if (node.left) q.push(node.left);
          if (node.right) q.push(node.right);
        }
      }

      res.push(level);
    }
  }

  dfs();
  return res;
};
