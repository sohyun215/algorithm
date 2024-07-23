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
    this.head++;
    return item;
  }

  size() {
    return this.tail - this.head;
  }
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [a, b] = input[0].split(' ').map(Number);
const queue = new Queue();
const LIMIT = 100000;
const visited = Array(LIMIT + 1).fill(false);
queue.enqueue([a, 0]);
visited[a] = true;

while (queue.size() > 0) {
  const [pos, cnt] = queue.dequeue();
  if (pos === b) {
    console.log(cnt);
    return;
  }

  const teleport = pos * 2;
  if (teleport <= LIMIT && !visited[teleport]) {
    queue.enqueue([teleport, cnt]);
    visited[teleport] = true;
  }
  for (const nxt of [pos - 1, pos + 1]) {
    if (nxt < 0 || nxt > LIMIT) continue;
    if (!visited[nxt]) {
      queue.enqueue([nxt, cnt + 1]);
      visited[nxt] = true;
    }
  }
}
