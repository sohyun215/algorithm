// https://school.programmers.co.kr/learn/courses/30/lessons/120895

function solution(my_string, num1, num2) {
  let str = [...my_string];
  let tmp = str[num1];
  str[num1] = str[num2];
  str[num2] = tmp;

  return str.join("");
}

/*

- 구조 분해 할당 사용
 [str[num1], str[num2]] = [str[num2], str[num1]];

 */