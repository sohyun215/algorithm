const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let cnt = 0;
for (let start = 0; start < n; start++) {
  let end = start;
  let sum = 0;
  while (end < n && sum < m) {
    sum += arr[end++];
  }
  if (sum === m) {
    cnt += 1;
  }
}
console.log(cnt);
