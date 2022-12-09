//Suppose an array of length n sorted in ascending order is rotated between 1 and n times.
//For example, the array nums = [0, 1, 2, 4, 5, 6, 7] might become:

var findMin = function (nums) {
  let result = nums[0];
  let right = nums.length - 1;
  let left = 0;

  while (left <= right) {
    if (nums[left] < nums[right]) {
      result = Math.min(result, nums[left]);
      break;
    }

    let mid = Math.floor((left + right) / 2);
    result = Math.min(result, nums[mid]);

    if (nums[mid] >= nums[left]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
};
