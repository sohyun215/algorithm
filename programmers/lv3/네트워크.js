function solution(n, computers) {
  let answer = 0;
  const visited = Array(n).fill(false);
  for (let i = 0; i < n; i++) {
    answer += bfs(i, n, computers, visited);
  }

  return answer;
}

function bfs(node, n, graph, visited) {
  if (visited[node]) return 0;

  visited[node] = true;
  const queue = [];
  queue.push(node);

  while (queue.length > 0) {
    const node = queue.shift();
    for (let i = 0; i < n; i++) {
      if (!visited[i] && graph[node][i] === 1) {
        queue.push(i);
        visited[i] = true;
      }
    }
  }

  return 1;
}
