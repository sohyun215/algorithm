const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const graph = [];
const visited = [];
for (let i = 1; i <= n; i++) {
  visited.push(Array(m).fill(false));
  graph.push([]);
  for (let j = 0; j < m; j++) {
    graph[i - 1].push(input[i][j]);
  }
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

let answer = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (graph[i][j] === 'I') {
      answer = dfs(i, j);
    }
  }
}

console.log(answer === 0 ? 'TT' : answer);

function dfs(x, y) {
  let cnt = 0;
  if (graph[x][y] === 'P') cnt += 1;
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx < 0 || ny < 0 || nx >= n || ny >= m || visited[nx][ny]) continue;
    if (graph[nx][ny] === 'X') continue;
    visited[nx][ny] = true;
    cnt += dfs(nx, ny);
  }
  return cnt;
}
