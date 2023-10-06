const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const tc = Number(input[0]);
let idx = 1;
for (let i = 0; i < tc; i++) {
  const n = Number(input[idx]);
  const arr = [];
  for (let j = 1; j <= n; j++) {
    const [s1, s2] = input[idx + j].split(' ').map(Number);
    arr.push([s1, s2]);
  }
  arr.sort((a, b) => a[0] - b[0]);
  let answer = n;
  let s = arr[0][1];
  for (let i = 1; i < n; i++) {
    if (arr[i][1] > s) answer--;
    else s = arr[i][1];
  }
  console.log(answer);
  idx += n + 1;
}
