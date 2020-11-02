const swap = (arr, indexOne, indexTwo) => [arr[indexOne], arr[indexTwo]] = [arr[indexTwo], arr[indexOne]];

const pivot = (arr, first = 0, end = arr.length) => {
  let pivot = arr[first];
  let swapIndex = first;
  for (let i = first + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, swapIndex, first);
  return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotindex = pivot(arr, left, right);
    quickSort(arr, left, pivotindex - 1);
    quickSort(arr, pivotindex + 1, right);
  }
  return arr;
}

console.log(quickSort([3, 6, 4, 9, 1, 5, 9, 0, -55]));
