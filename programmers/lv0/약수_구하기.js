// https://school.programmers.co.kr/learn/courses/30/lessons/120897

function solution(n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) answer.push(i);
  }
  return answer;
}
