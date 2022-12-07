//Given an integer array nums, return an array answer such that answer[i] is equal to the product
//of all the elements of nums except nums[i].

var productExceptSelf = function (nums) {
  let leftProduct = [];
  let rightProduct = [];

  leftProduct[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    leftProduct[i] = nums[i] * leftProduct[i - 1];
  }

  rightProduct[nums.length - 1] = nums[nums.length - 1];
  for (let i = nums.length - 2; i >= 0; i--) {
    rightProduct[i] = nums[i] * rightProduct[i + 1];
  }

  let answer = [];
  answer[0] = rightProduct[1];
  answer[nums.length - 1] = leftProduct[nums.length - 2];

  for (let i = 1; i < nums.length - 1; i++) {
    answer[i] = leftProduct[i - 1] * rightProduct[i + 1];
  }

  return answer;
};
