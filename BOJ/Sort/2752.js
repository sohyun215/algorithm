const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const sorted = input.sort((a, b) => a - b);

console.log(sorted[0], sorted[1], sorted[2]);
