function solution(n) {
  const NUM = ['4', '1', '2'];
  let answer = '';

  while (n !== 0) {
    answer = NUM[n % 3] + answer;
    n = parseInt((n - 1) / 3);
  }

  return answer;
}
/**
 * 3진법으로 생각
 * 0, 1, 2 가 안되고 1, 2, 4로 표현해야 함
 * 3으로 나누어 떨어질 때는 나머지가 0이기 때문에 표현 불가
 * -> 몫에다 1을 뺀 값으로 나머지를 구한다. (그럼 원래 나머지가 0일 때는 3이 될 것이고 이 3을 4로 표현해주기만 하면 됨)
 */
