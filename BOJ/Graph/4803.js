const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let line = 0;
let caseNum = 1;
while (true) {
  let [n, m] = input[line].split(' ').map(Number);
  if (n === 0 && m === 0) break;
  let graph = [];
  for (let i = 0; i <= n; i++) graph[i] = [];
  for (let i = line + 1; i <= line + m; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }
  const visited = Array(n + 1).fill(false);
  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    if (dfs(graph, visited, i, i)) {
      cnt++;
    }
  }

  let answer = `Case ${caseNum}: `;
  if (cnt > 1) {
    answer += `A forest of ${cnt} trees.`;
  } else if (cnt === 1) {
    answer += 'There is one tree.';
  } else answer += 'No trees.';
  console.log(answer);

  line += m + 1;
  caseNum++;
}

function dfs(graph, visited, cur, prev) {
  if (visited[cur]) return false;
  visited[cur] = true;
  for (let node of graph[cur]) {
    if (prev != node && !dfs(graph, visited, node, cur)) {
      return false;
    }
  }
  return true;
}
