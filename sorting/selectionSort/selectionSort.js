const swap = (arr, indexOne, indexTwo) => [arr[indexOne], arr[indexTwo]] = [arr[indexTwo], arr[indexOne]];

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) lowest = j;
    }
    if (arr[i] > arr[lowest]) swap(arr, i, lowest);
    //  if (i !== lowest)  swap(arr, i, lowest); //this can be used in place of the first one
  }
  return arr;
}

console.log(selectionSort([33, 67, 2, 4, 2, 9, 1, 0, 3]));