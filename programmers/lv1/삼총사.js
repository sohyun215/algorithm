// https://school.programmers.co.kr/learn/courses/30/lessons/131705

function solution(number) {
  let answer = 0;
  for (let i = 0; i < number.length - 2; i++) {
    for (let j = i + 1; j < number.length - 1; j++) {
      let sum = number[i] + number[j];
      for (let k = j + 1; k < number.length; k++) {
        if (number[k] === -sum) answer++;
      }
    }
  }
  return answer;
}
