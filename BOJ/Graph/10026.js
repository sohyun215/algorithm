const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const graph = [];
const visited = [];
const bVisited = [];

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

for (let i = 1; i <= n; i++) {
  graph.push(input[i].split(''));
  visited.push(Array(n).fill(false));
  bVisited.push(Array(n).fill(false));
}

function dfs(n, x, y, visited, flag) {
  visited[x][y] = true;
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
    if (visited[nx][ny]) continue;
    if (flag && (graph[x][y] === 'R' || graph[x][y] === 'G')) {
      if (graph[nx][ny] === 'B') continue;
    } else if (graph[x][y] !== graph[nx][ny]) continue;
    dfs(n, nx, ny, visited, flag);
  }
}

let cnt = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (visited[i][j]) continue;
    dfs(n, i, j, visited, false);
    cnt += 1;
  }
}

let bCnt = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (bVisited[i][j]) continue;
    dfs(n, i, j, bVisited, true);
    bCnt += 1;
  }
}

console.log(cnt, bCnt);
