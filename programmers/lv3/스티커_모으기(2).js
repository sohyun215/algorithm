function solution(sticker) {
  if (sticker.length <= 2) {
    return Math.max(...sticker);
  }
  const len = sticker.length;
  const dp1 = Array(len - 1).fill(0); // 첫 번째 스티커 뜯은 경우
  const dp2 = Array(len).fill(0); // 안 뜯은 경우
  dp1[0] = sticker[0];
  dp1[1] = sticker[0];
  dp2[1] = sticker[1];

  for (let i = 2; i < len - 1; i++) {
    dp1[i] = Math.max(dp1[i - 2] + sticker[i], dp1[i - 1]);
  }
  for (let i = 2; i < len; i++) {
    dp2[i] = Math.max(dp2[i - 2] + sticker[i], dp2[i - 1]);
  }

  return Math.max(dp1[len - 2], dp2[len - 1]);
}
