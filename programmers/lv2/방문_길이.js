function solution(dirs) {
  let answer = 0;
  const direction = {
    U: [-1, 0],
    D: [1, 0],
    R: [0, 1],
    L: [0, -1],
  };

  const graph = [];
  for (let i = 0; i < 11; i++) {
    graph.push([]);
    for (let j = 0; j < 11; j++) {
      graph[i].push([]);
    }
  }

  let x = 5;
  let y = 5;

  for (const dir of dirs) {
    const nx = x + direction[dir][0];
    const ny = y + direction[dir][1];

    if (nx < 0 || ny < 0 || nx > 10 || ny > 10) continue;

    let flag = false;
    for (let [prevX, prevY] of graph[nx][ny]) {
      if (prevX === x && prevY === y) {
        flag = true; // 이미 지나간 길
        break;
      }
    }
    if (!flag) {
      answer += 1;
      graph[nx][ny].push([x, y]);
      graph[x][y].push([nx, ny]);
    }

    [x, y] = [nx, ny];
  }
  return answer;
}
