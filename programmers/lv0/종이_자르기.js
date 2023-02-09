// 정수 M, N이 매개변수로 주어질 때, M x N 크기의 종이를 1 x 1로 만드는 최소로 가위질 해야하는 횟수를 return 하도록 solution 함수를 완성해보세요.

function solution(M, N) {
  var answer = 0;
  answer = M * N - 1;
  return answer;
}
