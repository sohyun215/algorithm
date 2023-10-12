const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().split('\n');

const n = Number(input[0]);
const arr = [0];
for (let i = 1; i <= n; i++) {
  arr.push(Number(input[i]));
}

const d = [0, arr[1], arr[1] + arr[2]];

for (let i = 3; i < arr.length; i++) {
  // m1, m2 : i번째 먹음
  let m1 = arr[i] + d[i - 2]; // i-1번째 안먹음
  let m2 = arr[i] + arr[i - 1] + d[i - 3]; // i-1 번째 먹음
  // i번째 안먹음 : d[i-1]
  d.push(Math.max(m1, m2, d[i - 1]));
}

console.log(d[n]);
