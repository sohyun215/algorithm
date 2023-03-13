// https://school.programmers.co.kr/learn/courses/30/lessons/135808

function solution(k, m, score) {
  let answer = 0;
  score.sort((a, b) => b - a);
  let i = 1;
  while (m * i - 1 < score.length) {
    answer += score[m * i - 1] * m;
    i++;
  }
  return answer;
}
