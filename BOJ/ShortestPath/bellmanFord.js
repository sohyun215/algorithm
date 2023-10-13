function bf(start) {
  dist[start] = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      let [cur, nextNode, cost] = edges[j];

      if (dist[cur] !== INF && dist[nextNode] > dist[cur] + cost) {
        dist[nextNode] = dist[cur] + cost;
        // n번째 라운드에서도 값이 갱신된다면 음수 순환이 존재
        if (i === n - 1) return true;
      }
    }
  }
  return false;
}

const INF = 1e9;
let n = 6; // 노드 개수
let m = 9; // 간선 개수

// [a, b, c]: a에서 b로 가는 비용이 c라는 의미
let edges = [
  [1, 2, 6],
  [1, 3, 2],
  [2, 3, 2],
  [2, 4, 2],
  [3, 5, 1],
  [4, 6, 2],
  [5, 2, 1],
  [5, 4, 3],
  [5, 6, 4],
];

let dist = new Array(n + 1).fill(INF); // 최단 거리를 모두 무한으로 초기화

let negativeCycle = bf(1); // 1번 노드가 시작 노드
if (negativeCycle) console.log(-1);
else {
  for (let i = 2; i <= n; i++) {
    if (dist[i] === INF) console.log(-1);
    else console.log(dist[i]);
  }
}
