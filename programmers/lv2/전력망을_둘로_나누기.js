function solution(n, wires) {
  let answer = n;

  for (let i = 0; i < n - 1; i++) {
    const graph = Array.from({ length: n + 1 }, () => []);
    for (let j = 0; j < n - 1; j++) {
      if (i === j) continue;
      const [v1, v2] = wires[j];
      graph[v1].push(v2);
      graph[v2].push(v1);
    }
    const cnt = dfs(graph, 1, Array(n + 1).fill(false));
    const diff = Math.abs(n - cnt - cnt);
    answer = Math.min(answer, diff);
  }

  return answer;
}

function dfs(graph, node, visited) {
  let cnt = 1;
  visited[node] = true;
  for (const nxtNode of graph[node]) {
    if (visited[nxtNode]) continue;
    cnt += dfs(graph, nxtNode, visited);
  }

  return cnt;
}
