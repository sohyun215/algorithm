const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const stringSet = new Set();
for (let i = 1; i <= n; i++) {
  stringSet.add(input[i]);
}
let answer = 0;
for (let i = n + 1; i < n + 1 + m; i++) {
  if (stringSet.has(input[i])) answer += 1;
}
console.log(answer);
