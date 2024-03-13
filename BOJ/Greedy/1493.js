const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [len, width, height] = input[0].split(' ').map(Number);

const tc = Number(input[1]);
let cube = Array(20).fill(0);
for (let i = 2; i <= tc + 1; i++) {
  const [a, cnt] = input[i].split(' ').map(Number);
  cube[a] = cnt;
}

let minLen = Math.min(len, width, height);
let i = parseInt(Math.log2(minLen));

let fillCnt = 0;
let answer = 0;

while (i >= 0) {
  let c = 2 ** i;
  fillCnt *= 8; // 현재 큐브 크기 기준으로 채운 개수
  // 필요한 큐브 개수
  const required =
    parseInt(len / c) * parseInt(width / c) * parseInt(height / c) - fillCnt;

  const fill = Math.min(cube[i], required);
  answer += fill;
  fillCnt += fill;
  i -= 1;
}

if (fillCnt === len * width * height) console.log(answer);
else console.log(-1);
