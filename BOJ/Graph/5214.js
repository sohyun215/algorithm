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

const [n, k, m] = input[0].split(' ').map(Number);
if (n === 1) {
  console.log(1);
  return;
}

const graph = [];

for (let i = 0; i <= n + m; i++) graph.push([]);

for (let i = 1; i <= m; i++) {
  const stations = input[i].split(' ').map(Number);
  for (let j = 0; j < k; j++) {
    graph[stations[j]].push(n + i); // 하이퍼튜브 노드 번호는 n+1번부터 붙이기
    graph[n + i].push(stations[j]);
  }
}

const queue = new Queue();
const visited = Array(n + m + 1).fill(false);

visited[1] = true;
queue.enqueue([1, 1]); // [노드 번호, 방문하는 노드 개수]

let answer = 0;
while (queue.getSize() > 0) {
  const [node, cnt] = queue.dequeue();

  if (node === n) {
    answer = cnt;
    break;
  }

  for (const nxt of graph[node]) {
    if (!visited[nxt]) {
      visited[nxt] = true;
      queue.enqueue([nxt, cnt + 1]);
    }
  }
}

console.log(answer === 0 ? -1 : parseInt(answer / 2) + 1);
