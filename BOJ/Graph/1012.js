const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim().split('\n');

const tc = Number(input[0]);
let i = 1,
  cnt = 0;
while (true) {
  if (tc === cnt) break;
  // m: 가로, n: 세로
  const [m, n, k] = input[i].split(' ').map(Number);
  const graph = [];
  for (let r = 0; r < n; r++) {
    let tmp = [];
    for (let p = 0; p < m; p++) {
      tmp.push(0);
    }
    graph[r] = tmp;
  }
  for (let j = i + 1; j <= i + k; j++) {
    const [x, y] = input[j].split(' ').map(Number);
    graph[y][x] = 1;
  }
  let answer = 0;
  for (let row = 0; row < n; row++) {
    for (let col = 0; col < m; col++) {
      if (graph[row][col] === 1) {
        dfs(graph, col, row, m, n);
        answer++;
      }
    }
  }
  cnt++;
  i += k + 1;
  console.log(answer);
}

function dfs(graph, x, y, m, n) {
  const dir = [
    [0, -1],
    [0, 1],
    [-1, 0],
    [1, 0],
  ];
  graph[y][x] = -1;
  for (let i = 0; i < 4; i++) {
    const nx = x + dir[i][1];
    const ny = y + dir[i][0];
    if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue;
    if (graph[ny][nx] === 1) {
      dfs(graph, nx, ny, m, n);
    }
  }
}
