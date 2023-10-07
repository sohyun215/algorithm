const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

const prefix = [0];
let sum = 0;
let count = Array.from({ length: m }, () => 0);

for (let a of arr) {
  sum += a;
  prefix.push(sum % m);
}

for (let i = 0; i <= n; i++) {
  count[prefix[i]]++;
}

let answer = 0;
for (let c of count) {
  if (c >= 2) {
    answer += (c * (c - 1)) / 2;
  }
}

console.log(answer);
