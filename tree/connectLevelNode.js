// You are given a perfect binary tree where all leaves are on the same level, and every parent has two children.

// The binary tree has the following definition:
// struct Node {
//   int val;
//   Node *left;
//   Node *right;
//   Node *next;
// }

var connect = function (root) {
  if (root === null) return root;

  let q = [root];
  let res = [];

  while (q.length > 0) {
    let len = q.length;

    for (let i = 0; i < len; i++) {
      let node = q.shift();

      if (i < len - 1) {
        node.next = q[0];
      }

      res.push(node);

      if (node.left != null) q.push(node.left);
      if (node.right != null) q.push(node.right);
    }
  }

  return res[0];
};
