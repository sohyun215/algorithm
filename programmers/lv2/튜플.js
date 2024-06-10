/** 처음 풀이 */
function solution(s) {
  const sets = s.slice(1, s.length - 1).split(',');
  let mp = new Map();
  let closed = false;
  let cnt = 0;
  let arr = [];

  for (let i = 0; i < sets.length; i++) {
    cnt += 1;
    if (Number.isInteger(Number(sets[i]))) {
      arr.push(Number(sets[i]));
      continue;
    }
    const num = [...sets[i]];
    if (num[0] === '{') {
      num.shift();
    }
    if (num[num.length - 1] === '}') {
      num.pop();
      closed = true;
    }
    arr.push(Number(num.join('')));

    if (closed) {
      mp.set(cnt, arr);
      arr = [];
      closed = false;
      cnt = 0;
    }
  }

  mp = Array.from(mp).sort((a, b) => a[0] - b[0]);

  const st = new Set();
  for (const [key, value] of mp) {
    for (const v of value) {
      st.add(v);
    }
  }

  return Array.from(st);
}

/** 다른 풀이 */
function solution(s) {
  const st = new Set();
  const sets = s
    .slice(2, -2)
    .split('},{')
    .map((set) => set.split(',').map(Number))
    .sort((a, b) => a.length - b.length);

  for (const set of sets) {
    for (const s of set) {
      st.add(s);
    }
  }
  // OR
  // return sets.reduce(
  //   (acc, cur) => [...acc, ...cur.filter((c) => !acc.includes(c))],
  //   [],
  // );

  return Array.from(st);
}
