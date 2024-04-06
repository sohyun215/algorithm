class PriorityQueue {
  // 최소힙 구현
  constructor() {
    // [노드, 우선순위 결정값] 형식으로 추가
    this.heap = [];
  }

  enq(element) {
    this.heap.push(element);
    let currentIndex = this.heap.length - 1;

    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);

      if (this.heap[parentIndex][1] <= this.heap[currentIndex][1]) break;

      // 부모와 위치 교체
      [this.heap[parentIndex], this.heap[currentIndex]] = [
        this.heap[currentIndex],
        this.heap[parentIndex],
      ];

      currentIndex = parentIndex;
    }
  }

  deq() {
    const first = this.heap[0];
    const last = this.heap.pop();
    const size = this.heap.length;

    if (size === 0) return first;

    // 루트 노드를 마지막 노드로 변경
    this.heap[0] = last;
    let currentIndex = 0;

    while (currentIndex < size) {
      let smallest = currentIndex;
      const left = currentIndex * 2 + 1;
      const right = currentIndex * 2 + 2;

      if (left < size && this.heap[smallest][1] > this.heap[left][1]) {
        smallest = left;
      }
      if (right < size && this.heap[smallest][1] > this.heap[right][1]) {
        smallest = right;
      }

      if (smallest === currentIndex) break;

      [this.heap[smallest], this.heap[currentIndex]] = [
        this.heap[currentIndex],
        this.heap[smallest],
      ];
      currentIndex = smallest;
    }

    return first;
  }

  size() {
    return this.heap.length;
  }
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const INF = 1e9;
const [v, e] = input[0].split(' ').map(Number);
const start = Number(input[1]);

const graph = [];
const distance = Array(v + 1).fill(INF);

for (let i = 0; i <= v; i++) graph.push([]);
for (let i = 2; i < e + 2; i++) {
  const [u, v, w] = input[i].split(' ').map(Number);
  graph[u].push([v, w]); // [노드, 거리]
}

const pq = new PriorityQueue();
pq.enq([start, 0]);
distance[start] = 0;

while (pq.size() > 0) {
  const [node, dist] = pq.deq();
  if (distance[node] < dist) continue;

  for (const [nxt, w] of graph[node]) {
    const cost = dist + w;

    if (distance[nxt] > cost) {
      distance[nxt] = cost;
      pq.enq([nxt, cost]);
    }
  }
}

let answer = '';
for (let i = 1; i <= v; i++) {
  if (distance[i] === INF) answer += 'INF\n';
  else answer += distance[i] + '\n';
}
console.log(answer);
