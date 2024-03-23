const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const house = [];
const chicken = [];
const visited = [];
const result = [];
for (let i = 0; i < n; i++) {
  const row = input[i + 1].split(' ').map(Number);
  for (let j = 0; j < n; j++) {
    if (row[j] === 1) house.push([i + 1, j + 1]);
    else if (row[j] === 2) chicken.push([i + 1, j + 1]);
  }
  visited.push(Array(n).fill(false));
}

let minDist = 1e9;
function dfs(start) {
  if (m === result.length) {
    let totalDist = 0;
    for (let i = 0; i < house.length; i++) {
      const [hx, hy] = house[i];
      let chickenDist = 1e9;
      for (let j = 0; j < m; j++) {
        const [cx, cy] = result[j];
        chickenDist = Math.min(
          chickenDist,
          Math.abs(hx - cx) + Math.abs(hy - cy),
        );
      }
      totalDist += chickenDist;
    }
    minDist = Math.min(minDist, totalDist);
    return;
  }

  for (let i = start; i < chicken.length; i++) {
    const [x, y] = chicken[i];
    if (visited[x - 1][y - 1]) continue;
    visited[x - 1][y - 1] = true;
    result.push([x, y]);
    dfs(i + 1);
    visited[x - 1][y - 1] = false;
    result.pop();
  }
}

dfs(0);
console.log(minDist);
