// https://school.programmers.co.kr/learn/courses/30/lessons/120862

function solution(numbers) {
  let mul = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      mul.push(numbers[i] * numbers[j]);
    }
  }
  mul.sort((a, b) => b - a);
  return mul[0];
}
