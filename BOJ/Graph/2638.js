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
const [n, m] = input[0].split(' ').map(Number);
const graph = [];
const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

for (let i = 1; i <= n; i++) {
  graph.push(input[i].split(' ').map(Number));
}

let answer = 0;
while (true) {
  bfs();

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] >= 3) graph[i][j] = 0;
      else if (graph[i][j] === 2) graph[i][j] = 1;
    }
  }

  let cnt = 0; // 녹은 치즈 개수
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (graph[i][j] === 0) cnt += 1;
    }
  }

  answer += 1;
  if (cnt === n * m) break;
}

console.log(answer);

function bfs() {
  const visited = [];
  for (let i = 1; i <= n; i++) {
    visited.push(Array(m).fill(false));
  }

  const queue = new Queue();
  queue.enqueue([0, 0]);
  visited[0][0] = true;

  while (queue.getSize() > 0) {
    const [x, y] = queue.dequeue();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= n || ny >= m || visited[nx][ny]) continue;
      if (graph[nx][ny] === 0) {
        queue.enqueue([nx, ny]);
        visited[nx][ny] = true;
      } else {
        graph[nx][ny] += 1;
      }
    }
  }
}
