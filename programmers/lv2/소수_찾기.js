function solution(numbers) {
  const arr = numbers.split('');
  const result = [];
  const visited = Array(arr.length).fill(false);
  const primeSet = new Set();
  dfs(arr, visited, result, primeSet);
  return primeSet.size;
}

function dfs(arr, visited, result, prime) {
  if (result.length > 0) {
    const num = Number(result.join(''));
    if (isPrime(num) && !prime.has(num)) {
      prime.add(num);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (!visited[i]) {
      visited[i] = true;
      result.push(arr[i]);
      dfs(arr, visited, result, prime);
      result.pop();
      visited[i] = false;
    }
  }
}

function isPrime(n) {
  if (n === 0 || n === 1) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
