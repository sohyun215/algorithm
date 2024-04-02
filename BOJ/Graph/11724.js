const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const graph = [];
for (let i = 0; i <= n; i++) graph.push([]);
const visited = Array(n + 1).fill(false);
for (let i = 1; i <= m; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

let cnt = 0;
for (let i = 1; i <= n; i++) {
  for (const node of graph[i]) {
    if (!visited[node]) {
      dfs(node);
      cnt += 1;
    }
  }
}

function dfs(node) {
  visited[node] = true;
  for (const nxt of graph[node]) {
    if (!visited[nxt]) {
      dfs(nxt);
    }
  }
}

console.log(cnt + visited.filter((x) => !x).length - 1);
