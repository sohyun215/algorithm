// https://school.programmers.co.kr/learn/courses/30/lessons/120871

function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer++;
    while (answer % 3 === 0 || answer.toString().includes(3)) {
      answer++;
    }
  }
  return answer;
}
