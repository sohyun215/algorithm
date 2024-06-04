function solution(n, works) {
  const worksLen = works.length;
  let leftTime = n;
  works.sort((a, b) => b - a);

  while (leftTime > 0) {
    if (works[0] === 0) break;
    works[0] -= 1;
    leftTime -= 1;
    let cur = 0;

    while (cur < worksLen) {
      let largest = cur;
      let left = cur * 2 + 1;
      let right = cur * 2 + 2;
      if (left < worksLen && works[cur] < works[left]) {
        largest = left;
      }
      if (right < worksLen && works[cur] < works[right]) {
        largest = right;
      }

      if (cur === largest) break;

      [works[cur], works[largest]] = [works[largest], works[cur]];
      cur = largest;
    }
  }

  return works.reduce((acc, cur) => acc + cur ** 2, 0);
}
