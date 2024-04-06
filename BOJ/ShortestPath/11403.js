const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const INF = 1e9;
const n = Number(input[0]);
const graph = [];
for (let i = 1; i <= n; i++) {
  graph.push([]);
  const line = input[i].split(' ').map(Number);
  for (let j = 0; j < n; j++) {
    if (line[j] === 0) graph[i - 1].push(INF);
    else graph[i - 1].push(1);
  }
}

for (let k = 0; k < n; k++) {
  for (let a = 0; a < n; a++) {
    for (let b = 0; b < n; b++) {
      graph[a][b] = Math.min(graph[a][b], graph[a][k] + graph[k][b]);
    }
  }
}

let answer = '';
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (graph[i][j] === INF) answer += '0 ';
    else answer += '1 ';
  }
  answer += '\n';
}
console.log(answer);
