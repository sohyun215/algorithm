function solution(genres, plays) {
  const answer = [];
  const playMap = new Map(); // 각 노래마다 재생 횟수와 고유 번호 기록
  let cntMap = new Map(); // 장르별로 총 재생 횟수 기록

  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    const cnt = plays[i];
    if (playMap.has(genre)) {
      // [재생 횟수, 고유 번호]
      playMap.set(genre, [...playMap.get(genre), [cnt, i]]);
      cntMap.set(genre, cntMap.get(genre) + cnt);
    } else {
      playMap.set(genre, [[cnt, i]]);
      cntMap.set(genre, cnt);
    }
  }

  // 총 재생 횟수 내림차순
  cntMap = Array.from(cntMap).sort((a, b) => b[1] - a[1]);
  for (const [genre, cnt] of cntMap) {
    const info = playMap.get(genre);
    // 재생 횟수 내림차순, 같으면 고유 번호 오름차순으로 정렬
    info.sort((a, b) => {
      if (a[0] === b[0]) return a[1] - b[1];
      return b[0] - a[0];
    });

    for (const [cnt, id] of info.slice(0, 2)) {
      answer.push(id);
    }
  }

  return answer;
}
