// https://school.programmers.co.kr/learn/courses/30/lessons/120887

function solution(i, j, k) {
  let answer = 0;
  for (let l = i; l <= j; l++) {
    answer += l.toString().split(k).length - 1;
  }
  return answer;
}
