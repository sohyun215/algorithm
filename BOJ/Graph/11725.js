const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const n = Number(input[0]);
const graph = [];
const visited = Array(n + 1).fill(false);
const answer = Array(n + 1).fill(0);
for (let i = 0; i <= n; i++) graph.push([]);

for (let i = 1; i < n; i++) {
  const [a, b] = input[i].split(' ');
  graph[a].push(b);
  graph[b].push(a);
}

for (let i = 1; i <= n; i++) {
  if (!visited[i]) dfs(i);
}

function dfs(node) {
  visited[node] = true;
  for (const g of graph[node]) {
    if (visited[g]) continue;
    answer[g] = node;
    dfs(g);
  }
}

let result = '';
for (let i = 2; i <= n; i++) {
  result += answer[i] + '\n';
}
console.log(result);
