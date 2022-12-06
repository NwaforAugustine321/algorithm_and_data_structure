// Given an array of integers nums and an integer target,
//return indices of the two numbers such that they add up to target.

var twoSum = function (nums, target) {
  const map = new Map();
  let i = 0;

  while (i < nums.length) {
    const sum = target - nums[i];

    if (map.has(nums[i])) {
      return [map.get(nums[i]), i];
    }

    map.set(sum, i);
    i++;
  }
};
