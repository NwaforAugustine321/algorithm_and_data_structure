function reverseString(str) {
  //my goal is not use any array method to achieve this

  //pseudo code
  //create a variable called result
  //iterate over the given word in a descending order
  //append the character index of each of the string to result
  //return result

  //use array method as thus below
  // return str.split('').reverse().join('');

  //The algorithm performance anaylysis. 
  //Space complexity of O(1)
  //Time complexity of  O(n)

  let result = "";

  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

console.log(reverseString('helo'))