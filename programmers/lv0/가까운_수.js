// https://school.programmers.co.kr/learn/courses/30/lessons/120890

function solution(array, n) {
  let answer = array[0];
  array.map((e) => {
    if (Math.abs(n - e) < Math.abs(n - answer)) answer = e;
    else if (Math.abs(n - e) === Math.abs(n - answer)) {
      answer = e < answer ? e : answer;
    }
  });
  return answer;
}
