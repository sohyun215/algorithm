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

const [n, e] = input[0].split(' ').map(Number);
const graph = [];
for (let i = 0; i <= n; i++) graph.push([]);

for (let i = 1; i <= e; i++) {
  const [a, b, c] = input[i].split(' ').map(Number);
  graph[a].push([b, c]);
  graph[b].push([a, c]);
}
const [a, b] = input[e + 1].split(' ').map(Number);

const distAB = dijkstra(a, b);
let sum1 = dijkstra(1, a) + distAB + dijkstra(b, n);
let sum2 = dijkstra(1, b) + distAB + dijkstra(a, n);
const shortest = Math.min(sum1, sum2);

if (shortest >= INF) console.log(-1);
else console.log(shortest);

function dijkstra(start, end) {
  const pq = new PriorityQueue();
  const distance = Array(n + 1).fill(INF);
  pq.enq([start, 0]); // [노드 번호, 거리]
  distance[start] = 0;

  while (pq.size() > 0) {
    const [now, dist] = pq.deq();

    if (distance[now] < dist) continue;

    for (const [node, w] of graph[now]) {
      const cost = dist + w;
      if (cost < distance[node]) {
        distance[node] = cost;
        pq.enq([node, cost]);
      }
    }
  }

  return distance[end];
}
