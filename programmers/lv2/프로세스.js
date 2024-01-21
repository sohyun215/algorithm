function solution(priorities, location) {
  let answer = 1;
  let order = new Array(priorities.length).fill(0).map((_, idx) => idx);
  while (true) {
    const max = Math.max(...priorities);
    const maxIdx = priorities.findIndex((p) => p === max);
    if (order[maxIdx] === location) {
      return answer;
    }
    priorities = priorities
      .slice(maxIdx + 1)
      .concat(priorities.slice(0, maxIdx));
    order = order.slice(maxIdx + 1).concat(order.slice(0, maxIdx));
    answer += 1;
  }
}

function solution(priorities, location) {
  let answer = 1;
  const pArr = priorities.map((p, idx) => {
    return { idx, priority: p };
  });
  while (true) {
    const firstEl = pArr.shift();
    const hasHighPriority = pArr.some((p) => p.priority > firstEl.priority);
    if (hasHighPriority) {
      pArr.push(firstEl);
    } else {
      if (firstEl.idx === location) return answer;
      answer += 1;
    }
  }
}
