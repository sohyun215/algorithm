// https://school.programmers.co.kr/learn/courses/30/lessons/120893

function solution(my_string) {
  my_string = my_string.split("");
  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] === my_string[i].toUpperCase()) {
      // 대문자일 경우
      my_string[i] = my_string[i].toLowerCase();
    } else my_string[i] = my_string[i].toUpperCase();
  }
  return my_string.join("");
}
