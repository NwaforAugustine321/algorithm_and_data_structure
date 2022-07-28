/**
 * @description a function that searches an array sequentially
 * @returns [index, -1]
 * @param [arr, value]
 */

function linearSearch(arr, element) {
  for (let value of arr) {
    if (value === element) return 1; 
  }
  return -1;
}

console.log(linearSearch([2, 3, 45, 6, 7, 'hello', NaN], ''));

