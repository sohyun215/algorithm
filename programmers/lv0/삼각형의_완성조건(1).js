// https://school.programmers.co.kr/learn/courses/30/lessons/120889
function solution(sides) {
  sides.sort((a, b) => b - a);
  return sides[0] < sides[1] + sides[2] ? 1 : 2;
}
