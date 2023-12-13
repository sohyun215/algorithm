function solution(n) {
  let answer = 0;
  for (let i = 1; i <= parseInt(n / 2); i++) {
    let sum = 0;
    let j = i;
    while (sum < n) {
      sum += j++;
    }
    if (sum === n) answer += 1;
  }
  return answer + 1;
}
