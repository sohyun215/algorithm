const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const prefixSum = [Array(n + 1).fill(0)];
for (let i = 1; i <= n; i++) {
  prefixSum.push(Array(n + 1).fill(0));
  const arr = input[i].split(' ').map(Number);
  for (let j = 1; j <= arr.length; j++) {
    prefixSum[i][j] = prefixSum[i][j - 1] + arr[j - 1];
  }
}

let answer = '';
for (let i = n + 1; i <= n + m; i++) {
  const [x1, y1, x2, y2] = input[i].split(' ').map(Number);
  let sum = 0;
  for (let j = x1; j <= x2; j++) {
    sum += prefixSum[j][y2] - prefixSum[j][y1 - 1];
  }
  answer += `${sum}\n`;
}
console.log(answer);
