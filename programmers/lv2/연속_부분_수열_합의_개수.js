function solution(elements) {
  const sumSet = new Set();
  for (let i = 1; i <= elements.length; i++) {
    for (let j = 0; j < elements.length; j++) {
      let sum = 0;
      for (let k = 0; k < i; k++) {
        sum += elements[(j + k) % elements.length];
      }
      sumSet.add(sum);
    }
  }
  return sumSet.size;
}
