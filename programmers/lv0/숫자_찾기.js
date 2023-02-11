// https://school.programmers.co.kr/learn/courses/30/lessons/120904

function solution(num, k) {
  let answer = num.toString().split("").findIndex((e) => e == k);

  return answer === -1 ? -1 : answer + 1;
}

/* 
  indexOf() 활용
  let answer = num.toString().indexOf(k);
*/