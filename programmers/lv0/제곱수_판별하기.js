// https://school.programmers.co.kr/learn/courses/30/lessons/120909

function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}

/* 
- 정수인지 판별하는 방법
1. Number.isInteger()

2. 1로 나눈 나머지가 0인지 확인
*/