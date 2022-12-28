// Design an algorithm to encode a list of strings to a string.
// The encoded string is then sent over the network and is decoded back to the original list of strings.

var encode = function (strs) {
  let res = '';
  for (let i = 0; i < strs.length; i++) {
    let len = strs[i].length;
    res += `${len}#${strs[i]}`;
  }
  console.log(res);
  return res;
};

var decode = function (s) {
  let i = 0;
  let wordLength = 0;
  let res = [];

  while (i < s.length) {
    let j = i;
    while (s[j] != '#') {
      j++;
    }

    wordLength = Number(s.slice(i, j));
    res.push(s.slice(j + 1, j + wordLength + 1));
    i = j + (wordLength + 1);
  }

  return res;
};
