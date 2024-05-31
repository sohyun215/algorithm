// 처음 제출한 풀이
function solution(numbers) {
  const strArr = numbers.map(String);

  strArr.sort((a, b) => {
    if (a[0] === b[0]) {
      if (Number(a + b) < Number(b + a)) return 1;
      else return -1;
    }
    return Number(b[0]) - Number(a[0]);
  });

  if (strArr.every((str) => str === '0')) return '0';

  return strArr.join('');
}

function solution2(numbers) {
  const strArr = numbers.sort((a, b) => `${b}${a}` - `${a}${b}`);

  return strArr[0] === 0 ? '0' : strArr.join('');
}
