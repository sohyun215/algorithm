class Queue {
  constructor() {
    this.items = {};
    this.head = 0;
    this.tail = 0;
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

  peek() {
    return items[this.head];
  }

  size() {
    return this.tail - this.head;
  }
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const tc = Number(input[0]);
let line = 1;
for (let i = 0; i < tc; i++) {
  const len = Number(input[line]);
  const [row, col] = input[line + 1].split(' ').map(Number);
  const [dest_row, dest_col] = input[line + 2].split(' ').map(Number);
  console.log(bfs(len, row, col, dest_row, dest_col));
  line += 3;
}

function bfs(n, row, col, dest_row, dest_col) {
  const visited = [];
  for (let i = 0; i < n; i++) {
    const tmp = Array(n).fill(0);
    visited[i] = tmp;
  }
  const queue = new Queue();
  queue.enqueue([row, col]);

  while (queue.size() !== 0) {
    const [r, c] = queue.dequeue();
    if (r === dest_row && c === dest_col) {
      return visited[r][c];
    }
    const dir = [
      [1, 2],
      [2, 1],
      [-2, 1],
      [-1, 2],
      [1, -2],
      [2, -1],
      [-2, -1],
      [-1, -2],
    ];
    for (let i = 0; i < 8; i++) {
      const nx = c + dir[i][0];
      const ny = r + dir[i][1];
      if (nx < 0 || ny < 0 || nx >= n || ny >= n || visited[ny][nx] !== 0)
        continue;
      queue.enqueue([ny, nx]);
      visited[ny][nx] = visited[r][c] + 1;
    }
  }
}
