function solution(skill, skill_trees) {
  let answer = 0;

  for (const tree of skill_trees) {
    let flag = true;
    const visited = new Array(skill.length).fill(false);

    for (const s of tree) {
      const idx = skill.indexOf(s);
      if (idx === -1) continue;
      if (idx > 0 && !visited[idx - 1]) {
        flag = false;
        break;
      }
      visited[idx] = true;
    }
    if (flag) answer += 1;
  }

  return answer;
}
