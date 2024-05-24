function solution(maps) {
  let answer = -1;
  const n = maps.length;
  const m = maps[0].length;

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  const visited = [];
  for (let i = 0; i < n; i++) {
    visited.push([]);
    for (let j = 0; j < m; j++) {
      visited[i].push(false);
    }
  }

  const dist = [];
  for (let i = 0; i < n; i++) {
    dist.push([]);
    for (let j = 0; j < m; j++) {
      dist[i].push(0);
    }
  }

  const queue = [];
  queue.push([0, 0]);
  visited[0][0] = true;
  dist[0][0] = 1;

  while (queue.length !== 0) {
    const [x, y] = queue.shift();
    if (x === n - 1 && y === m - 1) {
      answer = dist[x][y];
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
      if (visited[nx][ny] || maps[nx][ny] === 0) continue;

      queue.push([nx, ny]);
      visited[nx][ny] = true;
      dist[nx][ny] = dist[x][y] + 1;
    }
  }

  return answer;
}
