const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const x = Number(input[2]);

let cnt = 0;
for (let i = 0; i < n; i++) {
  let j = i + 1;
  while (arr[i] + arr[j] <= x) {
    if (arr[i] + arr[j] === x) {
      cnt += 1;
    }
    j += 1;
  }
}
console.log(cnt);
