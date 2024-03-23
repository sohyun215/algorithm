const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const graph = [];
const visited = [];
const result = [];

for (let i = 0; i < n; i++) {
  graph.push(input[i + 1].split('').map(Number));
  visited.push(Array(n).fill(false));
}

let cnt = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (!visited[i][j] && graph[i][j] === 1) {
      dfs(i, j);
      result.push(cnt);
      cnt = 0;
    }
  }
}

function dfs(row, col) {
  visited[row][col] = true;
  cnt += 1;
  for (let i = 0; i < 4; i++) {
    const nx = row + dx[i];
    const ny = col + dy[i];
    if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
    if (visited[nx][ny] || graph[nx][ny] !== 1) continue;
    dfs(nx, ny);
  }
}

console.log(result.length);
console.log(result.sort((a, b) => a - b).join('\n'));
