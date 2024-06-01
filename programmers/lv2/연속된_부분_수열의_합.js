function solution(sequence, k) {
  let answer = [];
  let cnt = 1e6;

  const len = sequence.length;
  let last = 0;
  let sum = 0;

  for (let first = 0; first < len; first++) {
    while (last < len && sum < k) {
      sum += sequence[last++];
    }

    if (sum === k && cnt > last - first - 1) {
      answer = [first, last - 1];
      cnt = last - first - 1;
    }

    sum -= sequence[first];
  }

  return answer;
}
