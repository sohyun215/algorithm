const fs = require('fs');
const input = fs.readFileSync('test.txt').toString().split('\n');

const INF = 1e9;

const [v, e] = input[0].split(' ').map(Number);
const start = Number(input[1]);

const graph = [];
const distance = Array(v).fill(INF);
for (let i = 0; i < v; i++) graph.push([]);

for (let i = 2; i < e + 2; i++) {
  const [a, b, w] = input[i].split(' ').map(Number);
  graph[a - 1].push([b - 1, w]);
}

const pQueue = new PriorityQueue((a, b) => b[1] - a[1]);

pQueue.enq([start - 1, 0]); // 시작 노드
distance[start - 1] = 0;

while (!pQueue.isEmpty()) {
  const [node, dist] = pQueue.deq();

  if (dist > distance[node]) continue;

  for (let [n, d] of graph[node]) {
    const cost = dist + d;
    if (cost < distance[n]) {
      pQueue.enq([n, cost]);
      distance[n] = cost;
    }
  }
}

for (let d of distance) {
  if (d === INF) console.log('INF');
  else console.log(d);
}

// // python 풀이
// from heapq import heappop, heappush
// import sys
// input = sys.stdin.readline
// v, e = map(int, input().split(' '))
// start = int(input())

// INF = 1000000000
// graph = [[] for _ in range(v)]
// distance = [INF] * v

// hq = []
// heappush(hq,(0, start-1)) # (거리, 노드번호)
// distance[start-1] = 0

// for _ in range(e):
//   a, b, w = map(int, input().split(' '))
//   # (노드 번호, 거리)
//   graph[a-1].append((b-1, w))

// while len(hq) != 0:
//   dist, node = heappop(hq)

//   if dist > distance[node]:
//     continue

//   for n, d in graph[node]:
//     cost = dist + d
//     if cost < distance[n]:
//       heappush(hq, (cost, n))
//       distance[n] = cost

// for dist in distance:
//   if dist == INF:
//     print('INF')
//   else:
//     print(dist)
