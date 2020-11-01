/**
 * @description function that searches a sorted array
 * @param [array, value]
 * @returns [true, false]
 */
function binarySearch(arr, value) {
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  let middlePointer = Math.floor((leftPointer + rightPointer) / 2)

  while (arr[middlePointer] !== value && leftPointer <= rightPointer) {
    if (value < arr[middlePointer]) {
      rightPointer = middlePointer - 1
    } else {
      leftPointer = middlePointer + 1
    }
    middlePointer = Math.floor((rightPointer + leftPointer) / 2)
  }
  return arr[middlePointer] === value ? middlePointer : -1
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], -1));
















