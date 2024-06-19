const MOD = 1_000_000_007;

function solution(m, n, puddles) {
  const graph = Array.from({ length: n }, () => new Array(m).fill(0));

  for (const puddle of puddles) {
    const [col, row] = puddle;
    graph[row - 1][col - 1] = -1;
  }

  graph[0][0] = 1;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] === -1) continue;
      if (i === 0 && j === 0) continue;

      let sum = 0;
      // 위
      if (i > 0 && graph[i - 1][j] !== -1) {
        sum += graph[i - 1][j];
      }
      // 왼쪽
      if (j > 0 && graph[i][j - 1] !== -1) {
        sum += graph[i][j - 1];
      }
      graph[i][j] += sum % MOD;
    }
  }

  return graph[n - 1][m - 1] % MOD;
}
