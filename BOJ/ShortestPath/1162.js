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

const INF = 1e17;
const [n, m, k] = input[0].split(' ').map(Number);
const graph = [];
for (let i = 0; i <= n; i++) graph.push([]);
for (let i = 1; i <= m; i++) {
  const [a, b, w] = input[i].split(' ').map(Number);
  graph[a].push([b, w]);
  graph[b].push([a, w]);
}

const distance = [];
for (let i = 0; i <= n; i++) {
  distance.push(Array(k + 1).fill(INF));
}

const pq = new PriorityQueue();
pq.enq([1, 0, 0]); // [노드 번호, 거리, 포장 횟수]
distance[1][0] = 0;

while (pq.size() > 0) {
  const [node, dist, paved] = pq.deq();

  if (distance[node][paved] < dist) continue;

  for (const [nxt, nxtDist] of graph[node]) {
    const cost = dist + nxtDist; // 현재 노드를 거쳐 nxt노드까지 가는 거리

    // nxt 노드로 가는 도로 포장X
    if (cost < distance[nxt][paved]) {
      distance[nxt][paved] = cost;
      pq.enq([nxt, cost, paved]);
    }

    // nxt 노드로 가는 도로 포장O
    if (paved < k && dist < distance[nxt][paved + 1]) {
      distance[nxt][paved + 1] = dist;
      pq.enq([nxt, dist, paved + 1]);
    }
  }
}

console.log(Math.min(...distance[n]));
