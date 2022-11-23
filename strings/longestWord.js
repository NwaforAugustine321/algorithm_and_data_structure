function findLongestWordInAString(str) {

  //pseudo code
  //create a function that accepts a string
  //pad the string with empty space to indicate end of sentence
  //create a variable called longestWordCount and initialize to zero
  //create a variable called counter and initialize to zero
  //iterate over the sentence
  //if an index of the string is a space that indicates end of a word
  //if the counter longestWordCount is less than counter 
  //set longestWordCount to counter because we have encountered longer word
  //otherwise increment counter by one
  //finally return longestWordCount

  //The algorithm performance anaylysis. 
  //Space complexity of O(1)
  //Time complexity of  O(n)

  str += ' ';
  let longestWordCount = 0;
  let counter = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      if (longestWordCount < counter) longestWordCount = counter;
      counter = 0;
    } else {
      counter++
    }
  }
  return longestWordCount;
}

findLongestWordInAString("What if we try a super-long word such as otorhinolaryngology");