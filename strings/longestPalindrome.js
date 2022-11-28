//palindromic problem is a type string problem that check if a word is the same when spelled in
//forward or backward direciton after removing all non alphanumerical characters from a given string as an input.

//LongestPalindrom is javascript function that checks if input assign to it as a string is palindromic substring or not and returns the
// palindromic substring in a given string input.

function longestPalindrome(s) {
  //Invocation of resetString function to remove all the non alphanumerical character before checking the for
  //palindromic substring in the  given string input.
  // it returns a valid string to check for palindromic substring
  let _validString = resetString(s.split(''));

  // Initialization of result variable calledd longest string
  let longest = '';
  let left = 0;

  //used a algorithm solving technique called two pointer pattern to iterate through the
  // valid string return from resetString function to get the valid palindromic substring
  for (let i = 0; i < _validString.length; i++) {
    if (!validateString(left, i, _validString)) {
      longest = _validString.slice(left, i + 1);
    } else {
      left++;
    }
  }

  //After the for loop we return the result from the function
  return longest;
}

//This function resetString remove all the non alphanumerical characters and return new valid string to perform longestPalindrome algorithm
function resetString(s) {
  let _validString = '';

  //Used for loop go through the string input and compare it a regex pattern to know when we meet non alphanumerical characters
  // and remove it from the string before returning to it to it calling function.
  for (let i = 0; i < s.length; i++) {
    if (/[a-z+0-9]/.test(s[i]) || /[A-Z+0-9]/.test(s[i])) {
      _validString = _validString + s[i].toLowerCase();
    }
  }

  return _validString;
}

//This function check for palindromic substring at each point in time to know if it is  palindromic string or not
function validateString(start, end, s) {
  start = start;
  end = end;

  while (start < end) {
    if (s[start] != s[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}

//This is the invocation of main function that will call other function to perform computation on the given string
longestPalindrome('babad');
