class Queue {
  constructor() {
    this.headIndex = 0;
    this.tailIndex = 0;
    this.queue = {};
  }

  enqueue(element) {
    this.queue[this.tailIndex++] = element;
  }

  dequeue() {
    const item = this.queue[this.headIndex];
    delete this.queue[this.headIndex++];
    return item;
  }

  getSize() {
    return this.tailIndex - this.headIndex;
  }
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, k] = input[0].split(' ').map(Number);
const graph = [];
const visited = [];

for (let i = 1; i <= n; i++) {
  graph.push(input[i].split(' ').map(Number));
  visited.push(Array(n).fill(false));
}

const [s, x, y] = input[n + 1].split(' ').map(Number);

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const queue = new Queue();

const temp = [];
for (let j = 0; j < n; j++) {
  for (let k = 0; k < n; k++) {
    if (graph[j][k] !== 0) {
      temp.push([j, k]);
      visited[j][k] = true;
    }
  }
}
temp.sort((a, b) => graph[a[0]][a[1]] - graph[b[0]][b[1]]);
for (const [x, y] of temp) {
  queue.enqueue([x, y]);
}
for (let i = 0; i < s; i++) {
  dfs();
}

function dfs() {
  const size = queue.getSize();
  for (let i = 0; i < size; i++) {
    const [curX, curY] = queue.dequeue();

    for (let j = 0; j < 4; j++) {
      const nx = curX + dx[j];
      const ny = curY + dy[j];

      if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
      if (visited[nx][ny]) continue;
      if (graph[nx][ny] === 0) {
        queue.enqueue([nx, ny]);
        graph[nx][ny] = graph[curX][curY];
        visited[nx][ny] = true;
      }
    }
  }
}

console.log(graph[x - 1][y - 1]);
