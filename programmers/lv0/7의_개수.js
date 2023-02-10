// https://school.programmers.co.kr/learn/courses/30/lessons/120912

function solution(array) {
  let answer = 0;
  for (let i = 0; i < array.length; i++) {
    while (array[i] !== 0) {
      if (array[i] % 10 === 7) {
        answer++;
      }
      array[i] = parseInt(array[i] / 10);
    }
  }
  return answer;
}

/* 
Array의 join() 활용

  return array.join("").split("7").length - 1;

*/
