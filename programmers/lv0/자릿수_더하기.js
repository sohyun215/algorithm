// https://school.programmers.co.kr/learn/courses/30/lessons/120906

function solution(n) {
  var answer = 0;
  for (let i = 0; i < n.toString().length; i++) {
    answer += parseInt(n.toString()[i]);
  }
  return answer;
}
