const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const [n, x] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

let sum = 0;
let visit = [];
let count = {};
let prefixSum = [0];
for (let a of arr) {
  sum += a;
  prefixSum.push(sum);
}

for (let i = n; i >= x; i--) {
  let cnt = prefixSum[i] - prefixSum[i - x];
  visit.push(cnt);
  if (cnt in count) {
    count[cnt]++;
  } else count[cnt] = 1;
}

const max = Math.max(...visit);
if (max === 0) {
  console.log('SAD');
} else {
  console.log(max);
  console.log(count[max]);
}
