const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const graph = [];
for (let i = 0; i <= n; i++) {
  graph[i] = [];
}
for (let i = 1; i < n; i++) {
  const [a, b, dist] = input[i].split(' ').map(Number);
  graph[a].push([b, dist]); // [노드, 거리]
  graph[b].push([a, dist]);
}

for (let i = 0; i < m; i++) {
  const [a, b] = input[n + i].split(' ').map(Number);
  const visited = Array(n + 1).fill(false);
  let dist = [];
  dfs(graph, visited, a, b, dist);
  const answer = dist.reduce((a, b) => a + b);
  console.log(answer);
}

function dfs(graph, visited, cur, end, dist) {
  visited[cur] = true;
  if (cur === end) {
    return true;
  }
  for (let g of graph[cur]) {
    if (!visited[g[0]]) {
      if (dfs(graph, visited, g[0], end, dist)) {
        dist.push(g[1]);
        return true;
      }
    }
  }
  return false;
}
