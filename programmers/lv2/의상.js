function solution(clothes) {
  let answer = 1;
  const clothesMap = new Map();
  for (const [a, b] of clothes) {
    if (clothesMap.has(b)) {
      clothesMap.set(b, [a, ...clothesMap.get(b)]);
    } else {
      clothesMap.set(b, [a]);
    }
  }
  clothesMap.forEach((value) => {
    answer *= value.length + 1;
  });
  return answer - 1;
}
