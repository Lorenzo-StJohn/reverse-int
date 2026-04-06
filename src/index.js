module.exports = function reverse(n) {
  let result = 0;
  let currentN = Math.abs(n);
  while (currentN > 0) {
    result *= 10;
    result += currentN % 10;
    currentN -= currentN % 10;
    currentN /= 10;
  }
  return result;
};
