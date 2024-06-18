function solution(n, s) {
  if (n > s) return [-1];

  const d = parseInt(s / n);
  let r = s % n;

  const answer = new Array(n).fill(d);

  while (r !== 0) {
    answer[r % n] += 1;
    r -= 1;
  }

  return answer.sort((a, b) => a - b);
}
