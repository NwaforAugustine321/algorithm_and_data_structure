
// es6 swap function
// const swap = (arr, indexOne, indexTwo) => [arr[indexOne], arr[indexTwo]] = [arr[indexTwo], arr[indexOne]];

// function bubbleSort(arr) {
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1 ; j++) {
//       if (arr[j] > arr[j  + 1]) { // i -1 makes it exclude the already sorted elements at the end of the array
//         swap(arr, j, j + 1)
//       }
//     }
//   }
//   return arr;
// }

// optimized version
function bubbleSort(arr) {
  let noswap;
  for (let i = arr.length; i > 0; i--) {
    noswap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) { // i -1 makes it exclude the already sorted elements at the end of the array
        swap(arr, j, j + 1)
        noswap = false;
      }
    }
    if (noswap) break; // if noswap is true array has been sorted
  }
  return arr;
}

function swap(arr, indexOne, indexTwo) {
  let temp = arr[indexOne];
  arr[indexOne] = arr[indexTwo];
  arr[indexTwo] = temp;
}

console.log(bubbleSort([1, 2, 2, 3, 4, 13, 9, 10,]))