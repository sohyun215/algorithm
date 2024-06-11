function solution(str1, str2) {
  const a1 = makeArr(str1);
  const a2 = makeArr(str2);

  const intersectionSet = [...new Set(a1.filter((e1) => a2.includes(e1)))];
  let intersectionLen = 0;

  for (let i = 0; i < intersectionSet.length; i++) {
    const i1 = a1.filter((e1) => e1 === intersectionSet[i]).length;
    const i2 = a2.filter((e2) => e2 === intersectionSet[i]).length;

    intersectionLen += Math.min(i1, i2);
  }

  const unionLen = a1.concat(a2).length - intersectionLen;

  return unionLen === 0
    ? 65536
    : parseInt((intersectionLen / unionLen) * 65536);
}

function makeArr(str) {
  const arr = [];
  str = str.toLowerCase();

  for (let i = 0; i < str.length - 1; i++) {
    if (!(str[i] >= 'a' && str[i] <= 'z')) continue;
    if (!(str[i + 1] >= 'a' && str[i + 1] <= 'z')) continue;

    arr.push(str[i] + str[i + 1]);
  }

  return arr;
}
