// https://school.programmers.co.kr/learn/courses/30/lessons/120894

function solution(numbers) {
  const num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  for (let i = 0; i < num.length; i++) {
    numbers = numbers.replaceAll(num[i], i);
  }
  return parseInt(numbers);
}
