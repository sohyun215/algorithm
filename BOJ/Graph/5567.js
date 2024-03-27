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

const n = Number(input[0]);
const m = Number(input[1]);
const graph = [];
for (let i = 0; i <= n; i++) graph.push([]);

for (let i = 2; i < m + 2; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

const queue = new Queue();
const result = [];
const visited = Array(n + 1).fill(false);
visited[1] = true;
queue.enqueue([1, 0]);

while (queue.getSize() > 0) {
  const [a, b] = queue.dequeue();
  for (const n of graph[a]) {
    if (!visited[n] && b <= 1) {
      visited[n] = true;
      queue.enqueue([n, b + 1]);
      result.push(n);
    }
  }
}

console.log(result.length);
