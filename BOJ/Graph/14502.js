const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);

const graph = [];

for (let i = 1; i <= n; i++) {
  graph.push(input[i].split(' ').map(Number));
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const possibleArea = [];
let visited = Array(possibleArea.length).fill(false);
let maxCnt = 0;
const result = [];

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (graph[i][j] === 0) possibleArea.push([i, j]);
  }
}

function dfs(start, arr, result) {
  if (result.length === 3) {
    for (let i = 0; i < 3; i++) {
      const [x, y] = arr[result[i]];
      graph[x][y] = 1;
    }
    maxCnt = Math.max(maxCnt, getSafeAreaCnt(graph));
    for (let i = 0; i < 3; i++) {
      const [x, y] = arr[result[i]];
      graph[x][y] = 0;
    }

    return;
  }
  for (let i = start; i < arr.length; i++) {
    if (visited[i]) continue;
    visited[i] = true;
    result.push(i);
    dfs(i + 1, arr, result);
    result.pop();
    visited[i] = false;
  }
}

function spreadVirus(graph, x, y) {
  graph[x][y] = 2;
  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
    if (graph[nx][ny] === 0) {
      spreadVirus(graph, nx, ny);
    }
  }
}

function getSafeAreaCnt(graph) {
  const newGraph = [];
  for (let i = 0; i < n; i++) {
    let tmp = [];
    for (let j = 0; j < m; j++) {
      tmp.push(graph[i][j]);
    }
    newGraph.push(tmp);
  }

  let cnt = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (newGraph[i][j] === 2) {
        spreadVirus(newGraph, i, j);
      }
    }
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (newGraph[i][j] === 0) cnt += 1;
    }
  }

  return cnt;
}

for (let i = 0; i < possibleArea.length; i++) {
  dfs(i, possibleArea, result);
}

console.log(maxCnt);
