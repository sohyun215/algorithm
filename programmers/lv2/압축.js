function solution(msg) {
  const answer = [];
  const dict = new Map();

  for (let i = 0; i < 26; i++) {
    dict.set(String.fromCharCode(65 + i), i + 1);
  }

  let index = 27;
  for (let i = 0; i < msg.length; ) {
    let j = 1;

    while (i + j <= msg.length && dict.has(msg.slice(i, i + j))) {
      j += 1;
    }

    answer.push(dict.get(msg.slice(i, i + j - 1)));
    dict.set(msg.slice(i, i + j), index);

    index += 1;
    i += j - 1;
  }

  return answer;
}
