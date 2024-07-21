class Queue {
  constructor() {
    this.queue = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(item) {
    this.queue[this.tail++] = item;
  }

  dequeue() {
    const item = this.queue[this.head];
    delete this.queue[this.head];
    this.head += 1;
    return item;
  }

  size() {
    return this.tail - this.head;
  }
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [m, n] = input[0].split(' ').map(Number);

const box = [];
for (let i = 1; i <= n; i++) {
  box.push(input[i].split(' ').map(Number));
}

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];
const queue = new Queue();
const visited = Array.from({ length: n }, () => Array(m).fill(false));
let visitedCnt = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (box[i][j] === 1) {
      queue.enqueue([i, j, 0]);
      visited[i][j] = true;
      visitedCnt += 1;
    } else if (box[i][j] === -1) {
      visited[i][j] = true;
      visitedCnt += 1;
    }
  }
}

if (visitedCnt === m * n) {
  console.log(0);
  return;
}

let answer = 0;

while (queue.size() > 0) {
  if (visitedCnt === m * n) break;
  const [y, x, cnt] = queue.dequeue();
  answer = cnt + 1;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (nx < 0 || ny < 0 || nx >= m || ny >= n || visited[ny][nx]) continue;
    if (box[ny][nx] === 1 || box[ny][nx] === -1) continue;
    queue.enqueue([ny, nx, cnt + 1]);
    box[ny][nx] = 1;
    visited[ny][nx] = true;
    visitedCnt += 1;
  }
}

if (visitedCnt !== m * n) console.log(-1);
else console.log(answer);
