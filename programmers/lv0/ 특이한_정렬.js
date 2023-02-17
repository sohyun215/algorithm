// https://school.programmers.co.kr/learn/courses/30/lessons/120880
// sort 함수 사용
function solution(numlist, n) {
  return numlist.sort((a, b) => {
    if (Math.abs(n - a) === Math.abs(n - b)) return b - a;
    else return Math.abs(n - a) - Math.abs(n - b);
  });
}
