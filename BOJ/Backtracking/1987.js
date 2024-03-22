const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [r, c] = input[0].split(' ').map(Number);
const arr = [];
for (let i = 0; i < r; i++) {
  arr.push(input[i + 1].split(''));
}
const visited = Array(26).fill(0);
const pos = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

let answer = 1; // 좌측 상단 칸 포함

function dfs(row, col, pRow, pCol, cnt) {
  answer = Math.max(answer, cnt);
  for (const [x, y] of pos) {
    const nx = row + x;
    const ny = col + y;
    if (nx < 0 || nx > r - 1 || ny < 0 || ny > c - 1) continue;
    if (nx === pRow && ny === pCol) continue;
    const idx = arr[nx][ny].charCodeAt() - 65;
    if (visited[idx] === 1) continue;
    visited[idx] = 1;
    dfs(nx, ny, row, col, cnt + 1);
    visited[idx] = 0;
  }
}

visited[arr[0][0].charCodeAt() - 65] = 1;
dfs(0, 0, 0, 0, answer);
console.log(answer);
