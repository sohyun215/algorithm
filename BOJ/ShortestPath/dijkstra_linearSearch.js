const INF = 1e9;
const n = 7;
const start = 1;

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
const distance = new Array(n + 1).fill(INF);
const visited = new Array(n + 1).fill(false);

// 최단 거리를 갖는 노드 번호 반환
function getSmallestNodeIndex() {
  let min = INF;
  let idx = 0;

  for (let i = 1; i <= n; i++) {
    if (distance[i] < min && !visited[i]) {
      min = distance[i];
      idx = i;
    }
  }

  return idx;
}

function dijkstra() {
  distance[start] = 0; // 시작 노드 거리는 0
  visited[start] = true;
  // 시작 노드와 인접한 노드들의 최단 거리 배열 갱신
  for (const [node, dist] of graph[start]) {
    distance[node] = dist;
  }

  for (let i = 0; i < n - 2; i++) {
    // 방문하지 않은 노드 중 가장 최단 거리가 짧은 노드 구하기
    const now = getSmallestNodeIndex();
    visited[now] = true;

    for (const [node, dist] of graph[now]) {
      const cost = distance[now] + dist; // 현재 노드를 거쳐 다른 노드로 가는 비용
      if (cost < distance[node]) {
        distance[node] = cost;
      }
    }
  }
}

dijkstra();

// 모든 노드로 가기 위한 최단 거리를 출력
for (let i = 1; i <= n; i++) {
  if (distance[i] === INF) console.log('INFINITY');
  else console.log(distance[i]);
}
