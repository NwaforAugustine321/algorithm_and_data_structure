//Given a string s consisting of words and spaces, return the length of the last word in the string.

//A word is a maximal substring consisting of non-space characters only.

var lengthOfLastWord = function (s) {
  let counter = 0;

  for (let i = s.length; i > 0; i--) {
    if (s[i - 1] != ' ') {
      let j = i;

      while (j >= 0) {
        if (s[j - 1] == ' ') {
          return counter;
        } else if (j <= 0) {
          return counter;
        }

        counter = counter + 1;
        j--;
      }
    }
  }
};

const result = lengthOfLastWord('   fly me   to   the moon  ');
console.log(result);
