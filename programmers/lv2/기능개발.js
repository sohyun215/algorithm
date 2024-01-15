function solution(progresses, speeds) {
  const answer = [];
  const days = progresses.map((progress, idx) =>
    Math.ceil((100 - progress) / speeds[idx]),
  );
  for (let i = 0; i < days.length; i++) {
    let cnt = 1;
    let deploy = days[i];
    while (i < days.length && deploy >= days[i + 1]) {
      cnt += 1;
      i += 1;
    }
    answer.push(cnt);
  }
  return answer;
}
