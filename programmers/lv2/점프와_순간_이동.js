function solution(n) {
  let answer = 1;
  while (n !== 1) {
    if (n % 2 === 1) {
      answer += 1;
    }
    n = parseInt(n / 2);
  }

  return answer;
}
