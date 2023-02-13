//https://school.programmers.co.kr/learn/courses/30/lessons/120891

function solution(order) {
  let answer = 0;
  for (o of order.toString()) {
    if (o === "3" || o === "6" || o === "9") answer++;
  }
  return answer;
}
