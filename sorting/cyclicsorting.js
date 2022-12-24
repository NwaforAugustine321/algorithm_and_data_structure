function cyclicSorting(num) {
  let pointer = 0;

  while (pointer < num.length - 1) {
    let fixIndex = num[pointer] - 1;

    if (num[fixIndex] != num[pointer]) {
      [num[fixIndex], num[pointer]] = [num[pointer], num[fixIndex]];
    } else {
      pointer++;
    }
  }

  return num;
}

cyclicSorting([7, 8, 10, 2, 5, 6, 3, 4, 1]);
