//The solution is straight-forward. We check each of the 3232 bits of the number.
//If the bit is 11, we add one to the number of 11 - bits.

var hammingWeight = function (n) {
  let counter = 0;

  while (n) {
    n = n & (n - 1);
    counter++;
  }

  return counter;
};

hammingWeight(00000000000000000000000000001011);
