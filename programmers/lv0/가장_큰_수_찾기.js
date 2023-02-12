// https://school.programmers.co.kr/learn/courses/30/lessons/120899

function solution(array) {
  let answer = [];
  let max = Math.max(...array);
  let idx = array.indexOf(max);
  answer.push(max);
  answer.push(idx);
  return answer;
}
