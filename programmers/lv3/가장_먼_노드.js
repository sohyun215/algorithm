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

function solution(n, edge) {
  let answer = 0;
  const INF = 1e9;
  const graph = [];
  for (let i = 0; i <= n; i++) graph.push([]);
  for (const [a, b] of edge) {
    graph[a].push(b);
    graph[b].push(a);
  }
  const distance = Array(n).fill(INF);
  const visited = Array(n + 1).fill(false);
  const queue = new Queue();
  queue.enqueue(1);
  visited[1] = true;
  distance[0] = 0;

  while (queue.size() > 0) {
    const now = queue.dequeue();
    for (const node of graph[now]) {
      if (!visited[node]) {
        queue.enqueue(node);
        distance[node - 1] = distance[now - 1] + 1;
        visited[node] = true;
      }
    }
  }

  const maxDist = Math.max(...distance);
  for (const d of distance) {
    if (d === maxDist) answer += 1;
  }
  return answer;
}
