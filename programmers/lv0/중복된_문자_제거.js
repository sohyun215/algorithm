// https://school.programmers.co.kr/learn/courses/30/lessons/120888

function solution(my_string) {
  my_string = new Set(my_string);
  return [...my_string].join("");
}
