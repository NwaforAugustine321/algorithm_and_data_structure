//Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// using set of O(n) run time and O(N) extras space
function singleNumber(nums) {
  let _set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (_set.has(nums[i])) {
      _set.delete(nums[i]);
    } else {
      _set.add(nums[i]);
    }
  }

  return _set.values().next().value;
}

singleNumber([2, 2, 1]);
