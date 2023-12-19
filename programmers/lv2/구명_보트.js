function solution(people, limit) {
  let answer = 0;
  let start = 0,
    end = people.length - 1;
  people.sort((a, b) => a - b);
  while (start < end) {
    if (people[start] + people[end] <= limit) {
      start += 1;
    }
    end -= 1;
    answer += 1;
    if (start === end) answer += 1;
  }

  return answer;
}
