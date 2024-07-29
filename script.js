// Power Function: Write a recursive function to calculate the result of raising a number to a given power.

function power(base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(2, 3));

// Fibonacci Sequence: Implement a recursive function to generate the nth Fibonacci number. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the two preceding numbers (0, 1, 1, 2, 3, 5, 8, ...).
function fibonacciLoop(num) {
  if (num <= 1) {
    return num;
  }
  let a = 0,
    b = 1,
    next;
  for (let i = 2; i <= num; i++) {
    next = a + b;
    a = b;
    b = next;
  }
  return b;
}
console.log(fibonacciLoop(10));
