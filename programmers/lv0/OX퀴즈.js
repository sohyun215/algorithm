// https://school.programmers.co.kr/learn/courses/30/lessons/120907

function solution(quiz) {
  var answer = [];
  quiz.map((e) => {
    let arr = e.split(" ");
    switch (arr[1]) {
      case "-":
        answer.push(arr[0] - arr[2] == arr[4] ? "O" : "X");
        break;
      case "+":
        answer.push(
          parseInt(arr[0]) + parseInt(arr[2]) === parseInt(arr[4]) ? "O" : "X"
        );
        break;
      default:
        break;
    }
  });
  return answer;
}

/* 
eval() : 문자로 표현된 코드를 실행하는 함수
  ex) eval("1+2") -> 3

function solution(quiz) {
  var answer = [];
  quiz
    .map((e) => e.split("="))
    .map((e) => {
      answer.push(eval(e[0]) == e[1] ? "O" : "X");
    });
  return answer;
}

*/
