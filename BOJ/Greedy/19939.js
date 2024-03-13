const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

let [n, k] = input.split(' ').map(Number);

const sum = (k * (k + 1)) / 2;

if (sum > n) {
  console.log(-1);
} else {
  n -= sum;
  if (n % k === 0) console.log(k - 1);
  else console.log(k);
}
