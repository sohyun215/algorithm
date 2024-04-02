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

const [n, m, v] = input[0].split(' ').map(Number);
const graph = [];
const visited = Array(n + 1).fill(false);
for (let i = 0; i <= n; i++) graph.push([]);
for (let i = 1; i <= m; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

for (let i = 1; i <= n; i++) {
  graph[i].sort((a, b) => a - b);
}

let dfsAnswer = '';
let bfsAnswer = '';

function dfs(node) {
  visited[node] = true;
  dfsAnswer += node + ' ';
  for (const nxt of graph[node]) {
    if (!visited[nxt]) {
      dfs(nxt);
    }
  }
}

function bfs() {
  const visited = Array(n + 1).fill(false);
  const queue = new Queue();
  queue.enqueue(v);
  visited[v] = true;
  bfsAnswer += v + ' ';

  while (queue.getSize() > 0) {
    const node = queue.dequeue();

    for (const nxt of graph[node]) {
      if (!visited[nxt]) {
        visited[nxt] = true;
        queue.enqueue(nxt);
        bfsAnswer += nxt + ' ';
      }
    }
  }
}

dfs(v);
bfs();

console.log(dfsAnswer);
console.log(bfsAnswer);
