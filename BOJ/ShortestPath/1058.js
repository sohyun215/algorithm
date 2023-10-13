const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().split('\n');

const INF = 100000;

const n = Number(input[0]);
const graph = [];
for (let i = 0; i < n; i++) graph.push(Array(n).fill(INF));

for (let i = 1; i <= n; i++) {
  for (let j = 0; j < n; j++) {
    if (input[i][j] === 'Y') graph[i - 1][j] = 1;
    graph[i - 1][i - 1] = 0;
  }
}

for (let k = 0; k < n; k++) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const cost = graph[i][k] + graph[k][j];
      graph[i][j] = Math.min(graph[i][j], cost);
    }
  }
}

let max = 0;
for (let i = 0; i < n; i++) {
  let tmp = 0;
  for (let j = 0; j < n; j++) {
    if (graph[i][j] > 0 && graph[i][j] <= 2) tmp++;
  }
  if (max < tmp) max = tmp;
}
console.log(max);
