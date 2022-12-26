// You are given an inclusive range[lower, upper] and a sorted unique integer array nums,
// where all elements are in the inclusive range.

// A number x is considered missing if x is in the range [lower, upper] and x is not in nums.

var findMissingRanges = function (nums, lower, upper) {
  let prev = lower - 1;
  let res = [];

  for (let i = 0; i <= nums.length; i++) {
    let cur = i == nums.length ? upper + 1 : nums[i];

    if (prev + 1 < cur - 1) {
      res.push(format(prev + 1, cur - 1));
    } else if (prev + 1 == cur - 1) {
      res.push(`${prev + 1}`);
    }

    prev = cur;
  }

  return res;
};

function format(l, u) {
  return `${l}->${u}`;
}
