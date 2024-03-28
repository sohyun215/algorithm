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

const [n, l, r] = input[0].split(' ').map(Number);
const graph = [];

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

for (let i = 1; i <= n; i++) {
  graph.push(input[i].split(' ').map(Number));
}

let date = 0;

while (true) {
  const visited = [];
  for (let i = 0; i < n; i++) visited.push(Array(n).fill(false));
  let unionCnt = 0; // 연합의 총 개수
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j]) {
        bfs(visited, i, j);
        unionCnt += 1;
      }
    }
  }
  if (unionCnt === n * n) break;

  date += 1;
}

console.log(date);

function bfs(visited, x, y) {
  const queue = new Queue();
  queue.enqueue([x, y]);

  let cnt = 0;
  let sum = 0;
  const union = [];

  while (queue.getSize() > 0) {
    const [x, y] = queue.dequeue();

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;
      const diff = Math.abs(graph[nx][ny] - graph[x][y]);
      if (diff < l || diff > r) continue;
      if (!visited[nx][ny]) {
        visited[nx][ny] = true;
        queue.enqueue([nx, ny]);
        union.push([nx, ny]);
        cnt += 1;
        sum += graph[nx][ny];
      }
    }
  }

  for (const [x, y] of union) {
    graph[x][y] = parseInt(sum / cnt);
  }
}
