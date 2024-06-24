function solution(numbers) {
  const answer = [];
  for (const number of numbers) {
    const num = [...number.toString(2)];
    const idx = num.lastIndexOf('0');

    if (idx === -1) {
      num.unshift('1');
      num[1] = '0';
    } else {
      num[idx] = '1';
      if (idx + 1 < num.length) num[idx + 1] = '0';
    }
    answer.push(parseInt(num.join(''), 2));
  }

  return answer;
}
