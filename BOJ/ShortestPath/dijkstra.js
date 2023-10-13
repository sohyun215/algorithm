function dijkstra() {
  let pq = new PriorityQueue((a, b) => b[0] - a[0]); // 최소힙

  pq.enq([0, start]);
  distance[start] = 0;

  while (pq.size() !== 0) {
    // 가장 최단 거리가 짧은 노드 꺼내기
    let [dist, now] = pq.deq();

    // 현재 노드가 이미 처리된 적이 있는 노드라면 무시
    if (distance[now] < dist) continue;

    // 현재 노드와 연결된 다른 인접 노드들 확인
    for (let i of graph[now]) {
      let cost = dist + i[1];

      // 현재 노드를 거쳐서 다른 노드로 이동하는 거리가 더 짧은 경우
      if (cost < distance[i[0]]) {
        distance[i[0]] = cost;
        pq.enq([cost, i[0]]);
      }
    }
  }
}

let INF = 1e9;
let n = 7;
let start = 1;

// 각 간선은 [노드, 비용] 형태
let graph = [
  [],
  [
    [2, 3],
    [3, 1],
    [4, 2],
  ],
  [
    [1, 3],
    [3, 1],
    [5, 1],
  ],
  [
    [1, 1],
    [2, 1],
    [4, 3],
    [6, 5],
  ],
  [
    [1, 2],
    [3, 3],
    [7, 1],
  ],
  [
    [2, 1],
    [6, 2],
  ],
  [
    [3, 5],
    [5, 2],
  ],
  [[4, 1]],
];

// 최단 거리 테이블을 모두 무한으로 초기화
let distance = new Array(n + 1).fill(INF);

dijkstra();

// 모든 노드로 가기 위한 최단 거리를 출력
for (let i = 1; i <= n; i++) {
  if (distance[i] === INF) console.log('INFINITY');
  else console.log(distance[i]);
}
