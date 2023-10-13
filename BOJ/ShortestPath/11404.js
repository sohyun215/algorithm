const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().split('\n');

const n = Number(input[0]); // 도시 개수
const m = Number(input[1]); // 버스 개수

const graph = [];
const INF = 1e9;
for (let i = 0; i < n; i++) {
  const tmp = [];
  for (let j = 0; j < n; j++) {
    if (i === j) tmp.push(0);
    else tmp.push(INF);
  }
  graph.push(tmp);
}

for (let i = 2; i < m + 2; i++) {
  // 출발, 도착, 비용
  const [a, b, c] = input[i].split(' ').map(Number);
  graph[a - 1][b - 1] = Math.min(graph[a - 1][b - 1], c);
}

for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const cost = graph[i][k] + graph[k][j];
      graph[i][j] = Math.min(graph[i][j], cost);
    }
  }
}

for (let i = 0; i < n; i++) {
  let answer = '';
  for (let j = 0; j < n; j++) {
    if (graph[i][j] === INF) answer += '0 ';
    else answer += graph[i][j] + ' ';
  }
  console.log(answer);
}
