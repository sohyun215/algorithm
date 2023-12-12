function solution(s) {
  let str = s;
  const answer = [0, 0];
  while (str !== '1') {
    answer[0] += 1;
    let strArr = str.split('').filter((x) => x != '0');
    answer[1] += str.length - strArr.length;
    str = strArr.length.toString(2);
  }
  return answer;
}
