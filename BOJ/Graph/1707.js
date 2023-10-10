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

let tc = Number(input[0]);
let line = 1;
while (tc--) {
  const [v, e] = input[line].split(' ').map(Number);
  const graph = [];
  for (let i = 0; i <= v; i++) graph[i] = [];
  for (let i = 1; i <= e; i++) {
    const [a, b] = input[line + i].split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }
  const visited = Array(v + 1).fill(-1);
  let flag = true;
  for (let i = 1; i <= v; i++) {
    if (visited[i] === -1) bfs(graph, visited, i);
  }

  for (let i = 1; i <= v; i++) {
    for (let node of graph[i]) {
      if (visited[i] === visited[node]) {
        flag = false;
        break;
      }
    }
  }
  console.log(flag ? 'YES' : 'NO');
  line += e + 1;
}

function bfs(graph, visited, s) {
  const queue = new Queue();
  queue.enqueue(s);
  visited[s] = 1;

  while (queue.size() !== 0) {
    const cur = queue.dequeue();
    for (let i of graph[cur]) {
      if (visited[i] === -1) {
        queue.enqueue(i);
        visited[i] = (visited[cur] + 1) % 2;
      }
    }
  }
}
