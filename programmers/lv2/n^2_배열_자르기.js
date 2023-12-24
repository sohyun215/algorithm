function solution(n, left, right) {
  const arr = [];
  for (let i = left; i <= right; i++) {
    const row = parseInt(i / n);
    const col = i % n;
    arr.push(Math.max(row + 1, col + 1));
  }
  return arr;
}
