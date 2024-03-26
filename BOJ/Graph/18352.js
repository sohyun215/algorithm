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

const [n, m, k, x] = input[0].split(' ').map(Number);
const arr = [];
const visited = Array(n + 1).fill(false);
const distance = Array(n + 1).fill(0);
for (let i = 0; i < n + 1; i++) arr.push([]);

for (let i = 1; i <= m; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  arr[a].push(b);
}

const answer = [];
const queue = new Queue();

visited[x] = true;
queue.enqueue([x, 0]);

while (queue.getSize() > 0) {
  const [cur, dist] = queue.dequeue();
  if (dist === k) {
    answer.push(cur);
  }
  for (const node of arr[cur]) {
    if (!visited[node]) {
      visited[node] = true;
      distance[node] = distance[cur] + 1;
      queue.enqueue([node, distance[node]]);
    }
  }
}

if (answer.length === 0) console.log(-1);
else console.log(answer.sort((a, b) => a - b).join('\n'));
