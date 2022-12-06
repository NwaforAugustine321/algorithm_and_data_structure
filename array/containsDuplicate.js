//Given an integer array nums, return true if any value appears at least twice in the array,
//and return false if every element is distinct.

var containsDuplicate = function (nums) {
  for (let left = 0; left < nums.length; left++) {
    let right = left + 1;
    while (right < nums.length) {
      if (nums[left] === nums[right]) return true;
      right++;
    }
  }

  return false;
};
