// Given an integer array nums, find the subarray which has the largest sum and return its sum.

var maxSubArray = function (nums) {
  let sum = 0;
  let maxsum = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];

    if (sum < nums[i]) {
      sum = nums[i];
    }

    if (maxsum < sum) {
      maxsum = sum;
    }
  }

  return maxsum;
};
