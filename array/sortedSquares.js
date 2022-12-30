// Given an integer array nums sorted in non - decreasing order, return
// an array of the squares of each number sorted in non - decreasing order.

var sortedSquares = function (nums) {
  let res = [];
  let len = nums.length - 1;
  let start = 0;
  let end = nums.length - 1;
  let square = 0;

  for (let i = len; i >= 0; i--) {
    if (Math.abs(nums[start]) < Math.abs(nums[end])) {
      square = nums[end];
      end--;
    } else {
      square = nums[start];
      start++;
    }

    res[i] = Math.pow(Math.abs(square), 2);
  }
  return res;
};
