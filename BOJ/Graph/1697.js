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
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const [n, k] = input.map(Number);
const visited = {};

const queue = new Queue();
queue.enqueue([n, 0]);
visited[n] = true;

let answer = 0;
while (queue.size() !== 0) {
  const [cur, height] = queue.dequeue();
  if (cur === k) {
    answer = height;
    break;
  }
  for (let i of [cur - 1, cur + 1, cur * 2]) {
    if (i < 0 || i > 100000) continue;
    if (!visited[i]) {
      queue.enqueue([i, height + 1]);
      visited[i] = true;
    }
  }
}

console.log(answer);
