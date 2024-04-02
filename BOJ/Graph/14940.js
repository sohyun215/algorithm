class Queue {
  constructor() {
    this.items = {};
    this.tail = 0;
    this.head = 0;
  }

  enqueue(item) {
    this.items[this.tail++] = item;
  }

  dequeue() {
    const item = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    return item;
  }

  getSize() {
    return this.tail - this.head;
  }
}
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [n, m] = input[0].split(' ').map(Number);
const graph = [];
const visited = [];
for (let i = 1; i <= n; i++) {
  graph.push(input[i].split(' ').map(Number));
  visited.push(Array(m).fill(false));
}

let start = [0, 0];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (graph[i][j] === 2) {
      start = [i, j];
      break;
    }
  }
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function bfs() {
  const [x, y] = start;
  const queue = new Queue();
  visited[x][y] = true;
  queue.enqueue([x, y, 0]);
  graph[x][y] = 0;

  while (queue.getSize() > 0) {
    const [x, y] = queue.dequeue();
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (ny >= m || ny < 0 || nx < 0 || nx >= n) continue;
      if (visited[nx][ny] || graph[nx][ny] === 0) continue;

      visited[nx][ny] = true;
      graph[nx][ny] = graph[x][y] + 1;
      queue.enqueue([nx, ny]);
    }
  }
}

bfs();

let answer = '';
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (!visited[i][j] && graph[i][j] !== 0) {
      graph[i][j] = -1;
    }
    answer += graph[i][j] + ' ';
  }
  console.log(answer);
  answer = '';
}
