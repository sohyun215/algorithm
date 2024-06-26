function solution(queue1, queue2) {
  const queueSize = queue1.length;
  let sum1 = queue1.reduce((acc, cur) => acc + cur, 0);
  let sum2 = queue2.reduce((acc, cur) => acc + cur, 0);
  const target = (sum1 + sum2) / 2;
  let [idx1, idx2] = [0, 0];

  while (sum1 !== target) {
    if (idx1 >= queueSize && idx2 >= queueSize) {
      return -1;
    }
    if (sum1 < sum2) {
      const t = queue2[idx2++];
      queue1.push(t);
      sum2 -= t;
      sum1 += t;
    } else {
      const t = queue1[idx1++];
      queue2.push(t);
      sum1 -= t;
      sum2 += t;
    }
  }

  return idx1 + idx2;
}
