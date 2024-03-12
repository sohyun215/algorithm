const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim().split('\n');

const n = Number(input[0]);
const h = input[1].split(' ').map(Number);
const arrow = Array(1000001).fill(0);

let answer = 0;
for (let i = 0; i < n; i++) {
  let cur = h[i];
  if (arrow[cur] > 0) {
    arrow[cur] -= 1;
    arrow[cur - 1] += 1;
  } else {
    answer += 1;
    arrow[cur - 1] += 1;
  }
}

console.log(answer);
