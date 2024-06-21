function solution(files) {
  const mapped = files.map((file, idx) => {
    const regExp = /(\D+)(\d+)/;
    const [, head, num] = file.match(regExp);
    return { idx, head: head.toLowerCase(), num: Number(num) };
  });

  mapped.sort((a, b) => {
    if (a.head > b.head) return 1;
    else if (a.head < b.head) return -1;
    else return a.num - b.num;
  });

  return mapped.map((file) => files[file.idx]);
}
