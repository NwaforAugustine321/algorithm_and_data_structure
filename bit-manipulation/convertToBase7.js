//Given an integer num, return a string of its base 7 representation.

var convertToBase7 = function (num) {
  const isNegative = num;
  let base = '';

  if (num < 0) num = ~num + 1;
  if (num == 0) return '0';

  while (true) {
    if (num < 1) {
      break;
    }

    decimal = num / 7;
    base += Math.floor(num % 7);
    console.log(decimal, num % 7);
    num = decimal;
  }

  let start = 0;
  let end = base.length - 1;
  const reverse = base.split('');

  while (start < end) {
    let temp = reverse[start];
    reverse[start] = reverse[end];
    reverse[end] = temp;
    end--;
    start++;
  }

  return isNegative < 0 ? '-' + reverse.join('') : reverse.join('');
};

convertToBase7(-7);
