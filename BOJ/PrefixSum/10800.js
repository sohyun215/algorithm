const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const balls = [];

for (let i = 0; i < n; i++) {
  const [color, size] = input[i + 1].split(' ').map(Number);
  balls.push([color, size, i]);
}

balls.sort((a, b) => a[1] - b[1]);
const totalPrefixSum = Array(n + 1).fill(0);
const colorSum = Array(n + 1).fill(0);
const answer = Array(n).fill(0);

for (let i = 0; i < n; i++) {
  let curIndex = i;
  while (curIndex < n && balls[i][1] === balls[curIndex][1]) {
    curIndex += 1;
  }
  for (let j = i; j < curIndex; j++) {
    answer[balls[j][2]] = totalPrefixSum[i] - colorSum[balls[j][0]];
  }
  for (let j = i; j < curIndex; j++) {
    totalPrefixSum[j + 1] = totalPrefixSum[j] + balls[j][1];
    colorSum[balls[j][0]] += balls[j][1];
  }

  i = curIndex - 1;
}

console.log(answer.join('\n'));
