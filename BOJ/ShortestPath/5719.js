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

function dijkstra(distance, graph, start) {
  const pq = new PriorityQueue();

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
}

// 최단 경로 역추적
function bfs(distance, graph, start, end) {
  const queue = new Queue();
  const visited = new Set();
  const removes = [];

  queue.enqueue(end);
  visited.add(end);

  while (queue.size() > 0) {
    const now = queue.dequeue();
    if (now === start) continue;

    for (const [n, w] of graph[now]) {
      const cost = distance[n] + w;
      // 최단 경로에 포함
      if (cost === distance[now]) {
        removes.push([n, now]);
        if (!visited.has(n)) {
          visited.add(n);
          queue.enqueue(n);
        }
      }
    }
  }
  return removes;
}

const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().trim().split('\n');

const INF = 1e9;

let line = 0;
while (true) {
  const [n, m] = input[line].split(' ').map(Number);

  if (n === 0 && m === 0) break;

  const [s, d] = input[line + 1].split(' ').map(Number);
  const graph = [];
  const reversedGraph = [];
  for (let i = 0; i < n; i++) {
    graph.push([]);
    reversedGraph.push([]);
  }

  for (let i = line + 2; i <= line + m + 1; i++) {
    const [a, b, c] = input[i].split(' ').map(Number);
    graph[a].push([b, c]);
    reversedGraph[b].push([a, c]);
  }

  let distance = Array(n).fill(INF);
  dijkstra(distance, graph, s);
  const removes = bfs(distance, reversedGraph, s, d);

  // 최단 경로를 제외한 새로운 그래프 생성
  const newGraph = [];
  for (let i = 0; i < n; i++) {
    newGraph.push([]);
    for (const [a, b] of graph[i]) {
      let flag = false;
      // v1에서 v2로 가는 간선이 최단 경로에 포함
      for (const [v1, v2] of removes) {
        if (i === v1 && a === v2) {
          flag = true;
          break;
        }
      }
      if (flag) continue;
      newGraph[i].push([a, b]);
    }
  }

  distance = Array(n).fill(INF);
  dijkstra(distance, newGraph, s);

  if (distance[d] === INF) console.log(-1);
  else console.log(distance[d]);

  line += m + 2;
}
