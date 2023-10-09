const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const c = Number(input[1]);
const arr = Array.from({ length: n + 1 }, () => []);
const visited = new Array(n + 1).fill(false);
for (let i = 2; i < c + 2; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  arr[a].push(b);
  arr[b].push(a);
}

let answer = -1;
function dfs(graph, cur) {
  visited[cur] = true;
  answer++;
  for (let g of graph[cur]) {
    if (!visited[g]) {
      dfs(graph, g);
    }
  }
}

dfs(arr, 1);
console.log(answer);
