function solution(order) {
  const boxCount = order.length;
  let answer = 0;
  const assiBelt = [];
  let curBox = 1; // 메인 벨트에서 꺼낼 박스 번호
  let idx = 0;

  while (curBox <= boxCount) {
    if (curBox !== order[idx]) {
      assiBelt.push(curBox++);
      continue;
    }

    answer += 1;
    idx += 1;
    curBox += 1;

    while (
      assiBelt.length > 0 &&
      idx < boxCount &&
      assiBelt[assiBelt.length - 1] === order[idx]
    ) {
      assiBelt.pop();
      answer += 1;
      idx += 1;
    }
  }

  return answer;
}
