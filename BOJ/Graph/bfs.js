const Queue = require('./Queue');
function bfs(graph, start, visited) {
  queue = new Queue();
  queue.enqueue(start);
  visited[start] = true;

  while (queue.size() !== 0) {
    v = queue.dequeue();
    console.log(v);

    for (i of graph[v]) {
      if (!visited[i]) {
        queue.enqueue(i);
        visited[i] = true;
      }
    }
  }
}

let graph = [[], [2, 3, 4], [1], [1, 5, 6], [1, 7], [3, 8], [3], [4], [5]];

let visited = Array(9).fill(false);

bfs(graph, 1, visited);
