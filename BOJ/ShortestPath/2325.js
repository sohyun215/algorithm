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
    this.head += 1;
    return item;
  }

  size() {
    return this.tail - this.head;
  }
}

function dijkstra(a, b) {
  const pq = new PriorityQueue();
  pq.enq([1, 0]); // [노드 번호, 거리]
  distance[1] = 0;

  while (pq.size() > 0) {
    const [now, dist] = pq.deq();

    if (distance[now] < dist) continue;

    for (const [node, w] of graph[now]) {
      // a와 b 사이 간선은 무시
      if ((node === a && now === b) || (node === b && now === a)) continue;

      const cost = dist + w;
      if (cost < distance[node]) {
        distance[node] = cost;
        pq.enq([node, cost]);
      }
    }
  }
}

// 최단 경로 역추적 함수
function bfs() {
  const queue = new Queue();
  const visited = new Set();

  queue.enqueue(n); // 도착 지점 큐에 삽입
  const removes = []; // 지울 간선들

  while (queue.size() > 0) {
    const now = queue.dequeue();
    if (now === 1) continue;

    for (const [node, w] of graph[now]) {
      const cost = distance[node] + w;
      // 최단 경로에 포함된 간선인 경우 삭제 목록에 추가
      if (cost === distance[now]) {
        removes.push([node, now]);
        // 각 직전 노드는 한번씩만 방문
        if (!visited.has(node)) {
          queue.enqueue(node);
          visited.add(node);
        }
      }
    }
  }
  return removes;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const INF = 1e9;
const [n, m] = input[0].split(' ').map(Number);
const graph = [];

for (let i = 0; i <= n; i++) graph.push([]);
for (let i = 1; i <= m; i++) {
  const [a, b, w] = input[i].split(' ').map(Number);
  graph[a].push([b, w]);
  graph[b].push([a, w]);
}

let distance = Array(n + 1).fill(INF);
dijkstra(0, 0); // 일반 다익스트라 수행 -> 최단 경로를 먼저 구한다.

const removes = bfs(); // 최단 경로 간선들 구하기
let result = 0;
for (const [a, b] of removes) {
  distance = Array(n + 1).fill(INF);
  dijkstra(a, b);
  result = Math.max(result, distance[n]);
}
console.log(result);
