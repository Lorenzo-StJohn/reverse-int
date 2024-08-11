module.exports = function reverse (n) {
  let result = 0;
  n = Math.abs(n);
  while (n > 0) {
    result *= 10;
    result += (n % 10);
    n -= (n % 10);
    n /= 10;
  }
  return result;
}

