function solution(want, number, discount) {
  let answer = 0;
  const lastDate = discount.length - 10;
  const product = {};
  want.forEach((data, idx) => {
    product[data] = number[idx];
  });

  for (let i = 0; i <= lastDate; i++) {
    let cnt = 0;
    const dcProduct = {};
    let flag = true;
    while (cnt < 10) {
      if (discount[i + cnt] in dcProduct) {
        dcProduct[discount[i + cnt]] += 1;
      } else {
        dcProduct[discount[i + cnt]] = 1;
      }
      cnt += 1;
    }
    for (const [prd, cnt] of Object.entries(product)) {
      if (prd in dcProduct) {
        if (cnt > dcProduct[prd]) {
          flag = false;
          break;
        }
      } else {
        flag = false;
        break;
      }
    }
    if (flag) answer += 1;
  }
  return answer;
}
