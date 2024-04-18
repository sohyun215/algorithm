const operators = ['+', '-'];

function solution(numbers, target) {
  return dfs(numbers, numbers.length, [], target);
}

function dfs(numbers, len, visited, target) {
  let cnt = 0;
  if (visited.length === len) {
    let t = 0;
    for (let i = 0; i < len; i++) {
      if (visited[i] === '+') t += numbers[i];
      else t -= numbers[i];
    }
    if (target === t) return 1;
    return 0;
  }

  for (let i = 0; i < 2; i++) {
    visited.push(operators[i]);
    cnt += dfs(numbers, len, visited, target);
    visited.pop();
  }
  return cnt;
}
