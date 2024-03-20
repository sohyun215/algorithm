const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const arr = [];
for (let i = 0; i < n; i++) {
  arr.push(input[1 + i].split(' ').map(Number));
}

const prefixSum = [];
let sum = 0;
for (let i = 0; i < n; i++) {
  prefixSum.push([sum]);
  for (let j = 0; j < m; j++) {
    sum += arr[i][j];
    prefixSum[i].push(sum);
  }
}

const k = Number(input[n + 1]);
let answer = '';
for (let q = 1; q <= k; q++) {
  let [i, j, x, y] = input[n + q + 1].split(' ').map(Number);
  let result = 0;
  let startCol = Math.min(j, y);
  let endCol = Math.max(j, y);
  while (i <= x) {
    result += prefixSum[i - 1][endCol] - prefixSum[i - 1][startCol - 1];
    i += 1;
  }
  answer += result + '\n';
}
console.log(answer);
