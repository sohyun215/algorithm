https://school.programmers.co.kr/learn/courses/30/lessons/120911

function solution(my_string) {
  let strArr = [...my_string.toLowerCase()].sort();
  let answer = "";
  strArr.map((s) => {
    answer += s;
  });
  return answer;
}



// Array의 join()는 배열의 모든 요소를 연결해 하나의 문자열로 만든다.
// [...s.toLowerCase()].sort().join("")