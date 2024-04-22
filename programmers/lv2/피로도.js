function solution(k, dungeons) {
  const visited = Array(dungeons.length).fill(false);
  return dfs(dungeons, visited, k, 0);
}

function dfs(arr, visited, leftFatigue, cnt) {
  let max = cnt;

  for (let i = 0; i < arr.length; i++) {
    if (!visited[i] && arr[i][0] <= leftFatigue) {
      visited[i] = true;
      const prev = leftFatigue;
      leftFatigue -= arr[i][1];
      max = Math.max(dfs(arr, visited, leftFatigue, cnt + 1), max);
      leftFatigue = prev;
      visited[i] = false;
    }
  }
  return max;
}
