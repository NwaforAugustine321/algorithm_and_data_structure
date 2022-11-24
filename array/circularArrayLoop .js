//You are playing a game involving a circular array of non-zero integers nums. Each nums[i]
// denotes the number of indices forward / backward you must move if you are located at index i:

//If nums[i] is positive, move nums[i] steps forward, and
//If nums[i] is negative, move nums[i] steps backward.
//Since the array is circular, you may assume that moving forward from the last element
// puts you on the first element, and moving backwards from the first element puts you on the last element.

var circularArrayLoop = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let slow = i;
    let fast = i;
    let ifforward = nums[i] >= 0;

    while (true) {
      slow = getNextStep(nums, slow, ifforward);

      if (slow === -1) {
        break;
      }

      fast = getNextStep(nums, fast, ifforward);

      if (fast === -1) {
        break;
      }

      fast = getNextStep(nums, fast, ifforward);

      if (fast === -1) {
        break;
      }

      if (fast === slow) {
        return true;
      }
    }
  }

  return false;
};

function getNextStep(arr, start, ifforward) {
  const direction = arr[start] >= 0;

  if (direction != ifforward) {
    return -1;
  }

  let nextIndex = (start + arr[start]) % arr.length;

  if (nextIndex < 0) {
    nextIndex = nextIndex + arr.length;
  }

  if (nextIndex === start) {
    return -1;
  }

  return nextIndex;
}
