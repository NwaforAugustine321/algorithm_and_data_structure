function binarySubstractioin(a, b) {
  while (b != 0) {
    let carry = ~a & b;
    a = a ^ b;
    b = carry << 1;
  }
  return a;
}

console.log(binarySubstractioin(12, 2));
